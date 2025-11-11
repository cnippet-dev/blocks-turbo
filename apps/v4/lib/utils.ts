import { randomBytes } from "node:crypto"
import { prisma } from "@repo/db"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export async function generateResetToken(userId: string): Promise<string> {
  const token = randomBytes(32).toString("hex")
  const expires = new Date(Date.now() + 3600000)

  await prisma.resetToken.create({
    data: {
      token,
      userId,
      expires,
    },
  })

  return token
}
