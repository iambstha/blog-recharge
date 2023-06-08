import React from 'react'
import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function createPost(data) {
    'use server'
    const title = data.get('title')?.valueOf()
    const tag = data.get('tag')?.valueOf()
    const desc = data.get('desc')?.valueOf()
    const post = data.get('post')?.valueOf()
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error("invalid title")
    }
    await prisma.post.create({
        data: { title, tag, desc, post }
    })
    redirect('/')
}

const page = () => {
    return (
        <div className=' flex w-full justify-center '>
        <div className=' flex flex-col p-2 justify-center items-center mt-2 mb-2 w-2/3 '>
            <h2 className=' text-5xl ' >Create a post</h2>
            <form action={createPost} className=' flex flex-col justify-between m-2 p-2 w-full ' >
                <input placeholder='Enter the title' type='text' name='title' className='border-2 border-gray-300 outline-none w-full mb-4 h-10 pl-4 pr-4 shadow-sm focus-within:border-gray-600 ' />
                <input placeholder='Enter the tag' type='text' name='tag' className='border-2 border-gray-300 outline-none w-full mb-4 h-10 pl-4 pr-4 shadow-sm focus-within:border-gray-600'  />
                <input placeholder='Enter the desc' type='text' name='desc' className='border-2 border-gray-300 outline-none w-full mb-4 h-10 pl-4 pr-4 shadow-sm focus-within:border-gray-600'  />
                <textarea placeholder='Enter the post' type='text' name='post' className='border-2 border-gray-300 outline-none w-full mb-4 pl-4 pr-4 shadow-sm focus-within:border-gray-600' rows={5} cols={50}  />
                <div className=' flex justify-end gap-2 items-center text-center '>
                    <Link href='/' className=' border-2 border-orange-200 rounded p-2 pl-4 pr-4 mr-2 hover:bg-orange-200 w-1/2 ' >Cancel</Link>
                    <button type='submit' className=' border-2 border-orange-200 rounded w-1/2 p-2 pl-4 pr-4 mr-2 bg-orange-200 hover:bg-orange-400 hover:border-orange-400 ' >Add</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default page