import { type User } from '@prisma/client'
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export const userService = {
    async getUsers(req: NextRequest) {
        const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
        // this log allows us to see the IP address of the request, which is useful to see
        // if the request is coming from the right place
        console.log(ip)
        const users = await prisma.user.findMany()
        return users
    },
    async createUser(data: User){
        const user = await prisma.user.create({
            data
        })
        return user
    },
    async getAnalytics(){
        const analytics = await prisma.user.findMany({ select: { role: true, gender: true } })
        const roleCount = {
            ADMIN: 0,
            USER: 0
        }
        const genderCount = {
            MALE: 0,
            FEMALE: 0,
            OTHER: 0
        }
        // Count the number of users with each role and gender
        for(const user of analytics){
            roleCount[user.role]++
        }

        for(const user of analytics){
            genderCount[user.gender]++
        }

        return { roleCount, genderCount }

}
}
