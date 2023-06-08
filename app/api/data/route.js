const data = [
    {
        id: 1,
        tags: [
            {
                id: 1,
                key: 'NextJS'
            },
            {
                id: 2,
                key: 'Frontend'
            },
        ],
        title: 'NextJS with Prisma ORM',
        desc: 'A detailed article on how to integrate Prisma ORM with NextJS. Building models & migrations.',
        post: {
            markup: `
            # Heading 1
            
            This is a paragraph of text.
            
            - List item 1
            - List item 2
            - List item 3
            
            ## Heading 2
            
            Another paragraph of text.
            
            *Italic text* and **bold text**.
            
            ### Heading 3
            
            Final paragraph.
          `
        }
    },
    {
        id: 2,
        tags: [
            {
                id: 1,
                key: 'ReactJS'
            },
        ],
        title: 'Fundamentals of ReactJS',
        desc: 'Functional & class based components in ReactJS. Handling states.',
        post: {
            markup: `# My Markdown Content`
        }
    },
    {
        id: 3,
        tags: [
            {
                id: 1,
                key: 'PostgreSQl'
            },
        ],
        title: 'Getting Started with PostfreSQL',
        desc: 'One of the best database to get started with.',
        post: {
            markup: `# My Markdown Content`
        }
    },
]

export default function handler(req,res){
    res.status(200).json(data)
}