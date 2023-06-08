import React from 'react'
import Link from 'next/link'

const TopBlogs = () => {
  return (
    <div className=' flex justify-center '>
        <div className=' flex w-4/5 justify-center border-2 border-slate-200 p-4 rounded-md '>
            <Link href='#' className=' w-1/4 p-2 pl-4 pr-4 flex flex-col justify-center bg-slate-200 rounded-l-lg '>
                <h3 className=' font-semibold text-2xl text-left  ' >Top Blogs</h3>
                <span>Craziest running around</span>
            </Link >
            <Link href='#' className=' ml-2 w-1/4 p-2 pl-4 pr-4 hover:bg-slate-100 transition-colors '>
                <span className=' text-slate-400 text-sm ' >NextJS</span>
                <h3 className=' font-semibold ' >NextJS with Prisma ORM</h3>
                <p className=' font-thin text-slate-400 flex flex-wrap text-sm ' >A detailed article on how to integrate Prisma ORM with NextJS. Building models & migrations.</p>
            </Link>
            <Link href='#' className=' ml-2 w-1/4 p-2 pl-4 pr-4 hover:bg-slate-100 transition-colors '>
                <span className=' text-slate-400 text-sm ' >ReactJS</span>
                <h3 className=' font-semibold ' >Fundamentals of ReactJS</h3>
                <p className=' font-thin text-slate-400 flex flex-wrap text-sm ' >Functional & class based components in ReactJS. Handling states.</p>
            </Link>
            <Link href='#' className=' ml-2 w-1/4 p-2 pl-4 pr-4 hover:bg-slate-100 transition-colors '>
                <span className=' text-slate-400 text-sm ' >PostgreSQL</span>
                <h3 className=' font-semibold ' >Getting Started with PostgreSQL</h3>
                <p className=' font-thin text-slate-400 flex flex-wrap text-sm ' >One of the best database to get started with.</p>
            </Link>
        </div>
    </div>
  )
}

export default TopBlogs