'use client'

import { useState } from 'react'
import { CheckCircleIcon } from './Icons'

const SERVICES = [
  'Wohnungsauflösung',
  'Haushaltsauflösung',
  'Entrümpelung',
  'Kellerräumung',
  'Dachbodenräumung',
  'Sperrmüll & Entsorgung',
]

const STEPS = ['Leistung', 'Details', 'Kontakt']

interface FormData {
  service: string
  plz: string
  flaeche: string
  zeitraum: string
  name: string
  phone: string
  email: string
  message: string
}

export function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<FormData>({
    service: '',
    plz: '',
    flaeche: '',
    zeitraum: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  function set(field: keyof FormData, value: string) {
    setData(d => ({ ...d, [field]: value }))
  }

  function next() { setStep(s => s + 1) }
  function back() { setStep(s => s - 1) }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Fehler beim Senden.')
      setDone(true)
    } catch {
      setError('Leider ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an: 02527 / 6 79 79 15')
    } finally {
      setSending(false)
    }
  }

  if (done) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircleIcon className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-heading text-xl font-black text-gray-900 mb-2">Vielen Dank!</h3>
        <p className="text-gray-500 text-sm">Ihre Anfrage wird geöffnet. Wir melden uns schnellstmöglich bei Ihnen.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Fortschrittsanzeige */}
      <div className="flex items-center mb-6">
        {STEPS.map((label, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-1.5">
              <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all duration-300 ${i < step ? 'bg-primary text-white' : i === step ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-gray-200 text-gray-400'}`}>
                {i < step ? '✓' : i + 1}
              </div>
              <span className={`text-xs font-semibold hidden sm:block ${i <= step ? 'text-primary' : 'text-gray-400'}`}>{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-0.5 flex-1 mx-2 rounded transition-all duration-300 ${i < step ? 'bg-primary' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Schritt 1: Leistung */}
      {step === 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Schritt 1</p>
          <h3 className="font-heading text-lg font-black text-gray-900 mb-4">Welche Leistung benötigen Sie?</h3>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {SERVICES.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => set('service', s)}
                className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${data.service === s ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-700 hover:border-primary/40 bg-white'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            disabled={!data.service}
            className="w-full bg-primary text-white font-bold py-3.5 rounded-2xl hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
          >
            Weiter →
          </button>
        </div>
      )}

      {/* Schritt 2: Details */}
      {step === 1 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Schritt 2</p>
          <h3 className="font-heading text-lg font-black text-gray-900 mb-4">Details zum Objekt</h3>
          <div className="space-y-3 mb-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">PLZ / Ort *</label>
              <input
                type="text"
                value={data.plz}
                onChange={e => set('plz', e.target.value)}
                placeholder="z. B. 59227 Ahlen"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Fläche ca. (m²)</label>
              <input
                type="text"
                value={data.flaeche}
                onChange={e => set('flaeche', e.target.value)}
                placeholder="z. B. 80"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Gewünschter Zeitraum</label>
              <input
                type="text"
                value={data.zeitraum}
                onChange={e => set('zeitraum', e.target.value)}
                placeholder="z. B. April 2025 oder so bald wie möglich"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-colors"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={back}
              className="flex-1 border-2 border-gray-200 text-gray-700 font-semibold py-3.5 rounded-2xl hover:border-gray-300 transition-colors"
            >
              ← Zurück
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!data.plz}
              className="flex-1 bg-primary text-white font-bold py-3.5 rounded-2xl hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
            >
              Weiter →
            </button>
          </div>
        </div>
      )}

      {/* Schritt 3: Kontakt */}
      {step === 2 && (
        <form onSubmit={submit}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Schritt 3</p>
          <h3 className="font-heading text-lg font-black text-gray-900 mb-4">Ihre Kontaktdaten</h3>
          <div className="space-y-3 mb-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Name *</label>
              <input
                type="text"
                required
                value={data.name}
                onChange={e => set('name', e.target.value)}
                placeholder="Vor- und Nachname"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Telefon *</label>
              <input
                type="tel"
                required
                value={data.phone}
                onChange={e => set('phone', e.target.value)}
                placeholder="z. B. 0157 12345678"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">E-Mail</label>
              <input
                type="email"
                value={data.email}
                onChange={e => set('email', e.target.value)}
                placeholder="ihre@email.de"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">Nachricht (optional)</label>
              <textarea
                value={data.message}
                onChange={e => set('message', e.target.value)}
                placeholder="Kurze Beschreibung des Auftrags …"
                rows={3}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-colors resize-none"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={back}
              className="flex-1 border-2 border-gray-200 text-gray-700 font-semibold py-3.5 rounded-2xl hover:border-gray-300 transition-colors"
            >
              ← Zurück
            </button>
            <button
              type="submit"
              disabled={sending}
              className="flex-1 bg-primary text-white font-bold py-3.5 rounded-2xl hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Wird gesendet …' : 'Kostenlos anfragen →'}
            </button>
          </div>
          {error && <p className="text-xs text-red-500 text-center mt-3">{error}</p>}
          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben für die Bearbeitung Ihrer Anfrage verwenden dürfen.
            Mehr dazu in unserer{' '}
            <a href="/datenschutz" className="underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.
          </p>
        </form>
      )}
    </div>
  )
}
