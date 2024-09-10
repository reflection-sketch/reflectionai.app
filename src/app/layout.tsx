import Provider from './provider'
import Header from './header'
import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#F1EDE8',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  title: 'title',
  description: 'description',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Provider>
          <div id="body" style={{ height: '100vh' }}>
            <Header />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
