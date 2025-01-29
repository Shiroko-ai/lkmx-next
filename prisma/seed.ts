import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@admin.com',
    lastName: 'Palacios',
    gender: 'FEMALE',
    age: 25,
    password: 'password123',
    role: 'ADMIN'
  },
  {
    name: 'Ivan',
    email: 'ivan@user.com',
    lastName: 'Palacios',
    gender: 'MALE',
    age: 24,
    password: 'password123',
    role: 'USER'
  }
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
