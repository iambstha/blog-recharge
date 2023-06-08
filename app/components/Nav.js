import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex justify-between p-4 border-b-2 items-baseline ' >
        <div>
            <Link href='/' className=' text-base lg:text-lg font-bold ' ><h1>BlogRecharge</h1></Link>
        </div>
        <div>
            <ul className=' flex gap-2 justify-end items-baseline text-sm lg:text-base '>
                <li><input type="text" className=' hidden lg:block border-1 rounded-lg p-1 pl-4 pr-4 border-slate-100 w-56 lg:w-80 shadow-sm outline-slate-300 ' placeholder='Search' /></li>
                <li><Link href='/articles' className=' p-2 text-slate-700 hover:text-slate-950 ' >Articles</Link></li>
                <li><Link href='/create-post' className=' p-2 text-slate-700 hover:text-slate-950 ' >Create</Link></li>
                <li><Link href='#' className=' p-2 text-slate-700 hover:text-slate-950 ' >Research</Link></li>
                <li><Link href='#' className=' p-2 text-slate-700 hover:text-slate-950 border-2 border-gray-100 bg-gray-100 hover:border-gray-300 hover:bg-gray-300 transition-colors ' >My Account</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav