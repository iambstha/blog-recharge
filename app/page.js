import Image from 'next/image'
import Board from './components/Board'
import TopBlogs from './components/TopBlogs'

export default function Home() {
  return (
    <main>
      <Board />
      <TopBlogs />
    </main>
  )
}
