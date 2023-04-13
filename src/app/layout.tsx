import Providers from './Providers'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
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
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
