import './globals.css'
import Nav from './components/Nav'
export const metadata = {
  title: 'Blog Recharge',
  description: 'A minimalist blog website designed using NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
