import { prismaMock } from '../../singleton'
import { userService } from '../../services/userService'
import { Gender, Role } from '@prisma/client'
import { SucessResponse } from '../../constants/enums'
test('should create new user ', async () => {
    const user = {
      id: 1,
      email: 'alice@alice.com',
      name: 'Alice',
      lastName: 'Doe',
      age: 20,
      gender: 'FEMALE' as Gender,
      role: 'USER' as Role,
      password: '123456'
    }

    prismaMock.user.create.mockResolvedValue(user)

    await expect(userService.createUser).resolves.toEqual(SucessResponse.SUCCESS)
  })
