import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Software Engineer / Développeur',
  description: 'Portfolio professionnel d\'un développeur full-stack spécialisé en React, Next.js, Node.js et technologies modernes.',
  keywords: ['portfolio', 'développeur', 'software engineer', 'react', 'nextjs', 'full-stack'],
  authors: [{ name: 'Vital Oura' }],
  openGraph: {
    title: 'Portfolio - Software Engineer / Développeur',
    description: 'Portfolio professionnel d\'un développeur full-stack',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}