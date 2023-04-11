import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is a IMDB Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          {/* <Nav /> */}
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
