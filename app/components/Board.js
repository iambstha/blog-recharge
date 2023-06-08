import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Board = () => {
    return (
        <div className=' w-full flex items-center justify-center '>
            <div className=' flex justify-between p-4 mt-6 mb-4 items-center  '>
                <div className='  flex flex-col items-start  '>
                    <h2 className=' text-4xl font-semibold w-72 mb-4 text-slate-950 ' >Making things better</h2>
                    <Link href='#' className=' border-2 border-slate-200 bg-slate-200 p-2 pl-4 pr-4 text-slate-950 hover:border-slate-300 hover:bg-slate-300 transition-colors ' >Start Here</Link>
                </div>
                <div>
                    <Image src='/homepage_blog_image.svg' width={350} height={350} />
                </div>
            </div>
        </div>
    )
}

export default Board