import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'w01f7da9.kasserver.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@collectus-entruempelung.de',
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { service, plz, flaeche, zeitraum, name, phone, email, message } = data

    const text = [
      `Leistung: ${service}`,
      `PLZ/Ort: ${plz}`,
      flaeche ? `Fläche ca.: ${flaeche} m²` : '',
      zeitraum ? `Zeitraum: ${zeitraum}` : '',
      `Name: ${name}`,
      `Telefon: ${phone}`,
      email ? `E-Mail Kunde: ${email}` : '',
      message ? `Nachricht: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    await transporter.sendMail({
      from: '"Collectus Anfrage" <info@collectus-entruempelung.de>',
      to: 'info@rundumshausserviceleistungen.de',
      replyTo: email || 'info@collectus-entruempelung.de',
      subject: `Neue Anfrage: ${service || 'Entrümpelung'} – ${plz}`,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
