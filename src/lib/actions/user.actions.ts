'use server'

import { handleError } from '@/lib/utils'
import User from '@/database/model/user.model'
import { CreateUserParams } from '@/app/types'
import { connectToDatabase } from '@/database/Connect'

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}