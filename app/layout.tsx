import type { Metadata } from 'next'
import { PT_Sans, PT_Sans_Narrow } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
})

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans-narrow',
})

export const metadata: Metadata = {
  title: 'Collectus Entrümpelung Ahlen – Wohnungsauflösung & Haushaltsauflösung',
  description: 'Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Ahlen und Umgebung.',
  metadataBase: new URL('https://collectus-entruempelung.de'),
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Collectus Entrümpelung Ahlen – Wohnungsauflösung & Haushaltsauflösung',
    description: 'Professionelle Entrümpelung, Wohnungsauflösung und Haushaltsauflösung in Ahlen und Umgebung. Kostenlose Besichtigung, Festpreis, besenreine Übergabe.',
    url: 'https://collectus-entruempelung.de',
    siteName: 'Collectus Entrümpelung',
    images: [{ url: '/images/abraham-garten.jpg', width: 2000, height: 1333 }],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${ptSans.variable} ${ptSansNarrow.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
