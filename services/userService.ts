import { Gender, Role, type User } from '@prisma/client'
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';
import { userSchema } from '@/utils/zodSchemas';
import bcrypt from 'bcrypt';

export const userService = {
    async getUsers(req: NextRequest) {
        const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
        // this log allows us to see the IP address of the request, which is useful to see
        // if the request is coming from the right place
        console.log(ip)
        const users = await prisma.user.findMany({ select: { id: true, name: true, email:true } })
        return users
    },
    async getUser(id: string){
        try {
            console.log('Querying user with ID:', id)
            // Validations
            if (!id) {
              console.log('No data provided')
              return  'ERROR_NO_DATA'
            }

            const userId = typeof id === 'string' ? Number.parseInt(id, 10) : id
            if (isNaN(userId)) {
              console.log('Invalid ID format')
              return 'INVALID_ID_FORMAT'
            }

            const user = await prisma.user.findUnique({
              where: {
                id: userId,
              },
            })

            if (!user) {
              console.log('User not found')
              return 'USER_NOT_FOUND'
            }
            user.role = user.role.toLowerCase() as Role
            user.gender = user.gender.toLowerCase() as Gender
            return user
          } catch (error) {
            console.error('Error fetching user:', error)
            return 'INTERNAL_SERVER_ERROR'
          }
    },
    async createUser(data: Record<string,string>){
        console.log('user data', data)
        const validation = await userSchema.safeParse(data)
        if(!validation.success){
            console.log('Validation error:', validation.error)
            return 'ERROR VALIDATION'
        }
        const checkEmail = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
        if(checkEmail){
            console.log('Email already exists')
            return 'ERROR REPEATED'
        }
        const salt = await bcrypt.genSalt(10)
        data.password = await bcrypt.hash(data.password, salt)
        data.role = data.role.toUpperCase() as Role
        data.gender = data.gender.toUpperCase() as Gender

        delete data.confirmPassword
        const user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                lastName: data.lastName,
                gender: data.gender as Gender,
                age: parseInt(data.age),
                password: data.password,
                role: data.role as Role
            }
        })
        if(!user){
            console.log('Error creating user')
            return 'ERROR UNKNOWN'
        }
        else{
        return 'SUCCESS'
        }
    },
    async updateUser(id: string, data: Record<string,string>){
        const validation = await userSchema.safeParse(data)
        if(!validation.success){
            console.log('Validation error:', validation.error)
            return 'ERROR VALIDATION'
        }
        data.role = data.role.toUpperCase() as Role
        data.gender = data.gender.toUpperCase() as Gender
        delete data.confirmPassword
            // Validations
            if (!id) {
                console.log('No data provided')
                return 'ERROR_NO_DATA'
              }

              const userId = typeof id === 'string' ? Number.parseInt(id, 10) : id
              if (isNaN(userId)) {
                console.log('Invalid ID format')
                return 'INVALID_ID_FORMAT'
              }


        const user = await prisma.user.update({
            where: {
                id: userId
            },
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
        for(const user of analytics){
            roleCount[user.role]++
        }

        for(const user of analytics){
            genderCount[user.gender]++
        }


        return{ roles: [
            { name: 'Administradores', value: roleCount.ADMIN },
            { name: 'Usuarios', value: roleCount.USER }
        ],
            genders: [
                { name: 'Masculino', value: genderCount.MALE },
                { name: 'Femenino', value: genderCount.FEMALE },
                { name: 'Otro', value: genderCount.OTHER }
            ]
    }

}
}
