import React from 'react';
import getArticles from '../func/getArticles';

const Page = async ({ params }) => {
    const post = await getArticles()

    if (!post) {
        return <div>Loading...</div>;
    }
    let id;
    for (let i = 0; i < post.length; i++) {
        if (encodeURIComponent(post[i].title.toLowerCase()) === params.blog.toLowerCase()) {
            id = i
            break;
        }
    }
    return (
        <main className=' flex p-4 justify-center w-full font-mono '>
        {
            post.length ?
                <div className=' p-2 w-3/6 flex flex-col justify-start items-start '>
                    <span className=' border-2 border-slate-100 p-1 pl-2 pr-2 bg-slate-100 mb-2 mt-2 '>{post[id].tag}</span>
                    <h2 className=' text-5xl w-full border-b-2 border-b-gray-200 pb-2 '>{post[id].title}</h2>
                    <div className=' flex flex-col mb-2 mt-2 '>
                        <span className=' text-slate-400 ' >{post[id].desc}</span>
                        <span className=' text-right text-slate-500 ' >{post[id].createdAt.toLocaleString()}</span>
                        <p className=' mt-4 mb-4 ' >{post[id].post}</p>
                    </div>
                </div> :
                <div>
                    Bye
                </div>
        }
    </main>
    );
};

export default Page;
