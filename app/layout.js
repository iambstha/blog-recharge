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
        <script type="module" src="https://md-block.verou.me/md-block.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/markdown-it/dist/markdown-it.js"></script>
      </body>
    </html>
  )
}
