import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { service, plz, flaeche, zeitraum, name, phone, email, message } = body

    if (!name || !phone || !service || !plz) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const rows = (
      [
        ['Leistung', service],
        ['PLZ / Ort', plz],
        flaeche ? ['Fläche ca.', `${flaeche} m²`] : null,
        zeitraum ? ['Zeitraum', zeitraum] : null,
        ['Name', name],
        ['Telefon', phone],
        email ? ['E-Mail', email] : null,
        message ? ['Nachricht', message] : null,
      ] as ([string, string] | null)[]
    )
      .filter((r): r is [string, string] => r !== null)
      .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#64748b;font-weight:600;white-space:nowrap">${k}</td><td style="padding:6px 12px;color:#0f172a">${v}</td></tr>`)
      .join('')

    await transporter.sendMail({
      from: `"Collectus Website" <${process.env.SMTP_USER}>`,
      to: 'info@collectus-entruempelung.de',
      replyTo: email || undefined,
      subject: `Neue Anfrage: ${service} – ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
          <h2 style="color:#2563eb;margin:0 0 20px">Neue Anfrage über collectus-entruempelung.de</h2>
          <table style="border-collapse:collapse;width:100%;background:#f8fafc;border-radius:8px;overflow:hidden">
            <tbody>${rows}</tbody>
          </table>
          <p style="color:#94a3b8;font-size:12px;margin-top:24px">
            Gesendet über das Kontaktformular auf collectus-entruempelung.de
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 })
  }
}
