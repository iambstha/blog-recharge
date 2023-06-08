import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex justify-between p-4 border-b-2 items-baseline ' >
        <div>
            <Link href='/' className=' text-lg font-bold ' ><h1>BlogRecharge</h1></Link>
        </div>
        <div>
            <ul className=' flex gap-2 justify-end items-baseline text-md '>
                <li><input type="text" className=' border-1 rounded-lg p-1 pl-4 pr-4 border-slate-100 w-80 shadow-sm outline-slate-300 ' placeholder='Search' /></li>
                <li><Link href='#' className=' p-2 ' >Articles</Link></li>
                <li><Link href='#' className=' p-2 ' >Research</Link></li>
                <li><Link href='#' className=' p-2 border-2 border-gray-100 bg-gray-100 hover:border-gray-300 hover:bg-gray-300 transition-colors ' >My Account</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav