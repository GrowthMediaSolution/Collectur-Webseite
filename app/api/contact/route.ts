import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// TODO after domain verification on resend.com/domains:
//   - change FROM back to <info@collectus-entruempelung.de>
//   - change TO back to info@rundumshausserviceleistungen.de
const TO = 'info@collectus-entruempelung.de'
const FROM = 'Collectus Anfrage <onboarding@resend.dev>'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY missing')
      return NextResponse.json({ ok: false, error: 'config' }, { status: 500 })
    }

    const data = await req.json()
    const { service, plz, flaeche, zeitraum, name, phone, email, message } = data || {}

    if (!name || !phone || !plz) {
      return NextResponse.json({ ok: false, error: 'missing fields' }, { status: 400 })
    }

    const lines = [
      `Leistung: ${service || '-'}`,
      `PLZ/Ort: ${plz}`,
      flaeche ? `Fläche ca.: ${flaeche} m²` : '',
      zeitraum ? `Zeitraum: ${zeitraum}` : '',
      `Name: ${name}`,
      `Telefon: ${phone}`,
      email ? `E-Mail Kunde: ${email}` : '',
      message ? `Nachricht: ${message}` : '',
    ].filter(Boolean)

    const html = `<h2>Neue Anfrage über collectus-entruempelung.de</h2><pre style="font-family:Arial,sans-serif;font-size:14px">${lines.join('\n')}</pre>`

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email || undefined,
      subject: `Neue Anfrage: ${service || 'Entrümpelung'} – ${plz}`,
      text: lines.join('\n'),
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Mail handler error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
