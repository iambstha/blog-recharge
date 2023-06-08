import { prisma } from '@/db'

export default function getArticles(){
    return prisma.post.findMany()
}
