import User from "@/models/User"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"


export const POST = async (req: Request, res: Response) => {
  const { name, email, password } = await req.json()

  await connect()

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  })

  try {
    await newUser.save()
    return new NextResponse(JSON.stringify(newUser), { status: 201 })
  } catch (error) {
    return new NextResponse("Error in response of DB", { status: 500 })
  }
}