import React from 'react'
// import getArticles from '../func/getArticles'
import Board from '../components/Board'
import Link from 'next/link'
import { prisma } from '@/db'

function getArticles(){
    return prisma.post.findMany()
}


const page = async () => {
    const post = await getArticles()

    return (
        <div>
            <Board />
            <main className=' flex p-4 justify-center w-full font-mono '>
                {
                    post.length ?
                        <div className=' p-2 w-3/6 flex flex-col justify-start items-start '>
                            <h2 className=' text-5xl w-full border-b-2 border-b-gray-200 pb-2 '>All Articles</h2>
                            <div className=' flex flex-col mb-2 mt-2 w-full '>
                                {post.map(i => {
                                    return <div className=' pb-2 '>
                                        <Link href={i.title} className='flex justify-between text-lg hover:underline cursor-pointer  '  >
                                            <span>{i.title}</span>
                                            <span>{i.createdAt.toLocaleString()}</span>
                                        </Link>
                                    </div>
                                })}
                            </div>
                        </div> :
                        <div>
                            Bye
                        </div>
                }
            </main>
        </div>
    )
}

export default page