import React from 'react'
import Link from 'next/link'
import getArticles from '../func/getArticles';

const TopBlogs = async () => {
    const post = await getArticles()
    const dataa = post.slice(0,3)
  return (
    <div className=' flex justify-center w-full '>
        <div className=' flex flex-col m-2  w-full lg:w-4/5 lg:flex-row lg:m-4 justify-center border-2 border-slate-200 p-4 rounded-md '>
            <Link href='#' className=' ml-2 mb-2 lg:mb-0 w-full lg:w-1/4 p-2 pl-4 pr-4 flex flex-col justify-center bg-slate-200 '>
                <h3 className=' font-semibold text-2xl text-left  ' >Top Blogs</h3>
                <span>Craziest running around</span>
            </Link >
            {
                dataa.map(d => {
                    return <Link href={d.title} className=' ml-2 w-full border-b-2 lg:border-b-0 border-b-slate-100 mb-2 lg:mb-0 lg:w-1/4 p-2 pl-4 pr-4 hover:bg-slate-100 transition-colors '>
                    <span className=' text-slate-400 text-sm ' >{d.tag}</span>
                    <h3 className=' font-semibold ' >{d.title}</h3>
                    <p className=' font-thin text-slate-400 flex flex-wrap text-sm ' >{d.desc}</p>
                </Link>
                })
            }
        </div>
    </div>
  )
}

export default TopBlogs