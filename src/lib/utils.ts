// Temporary utils without Prisma - we'll add it back after generation

// Password hashing utility
export const hashPassword = async (password: string): Promise<string> => {
  // We'll implement proper bcrypt later
  return Promise.resolve(password)
}

// Email validation utility
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Phone validation for Bangladesh
export const validateBangladeshiPhone = (phone: string): boolean => {
  const re = /^\+8801[3-9]\d{8}$/
  return re.test(phone)
}

// Temporary empty prisma export - we'll replace this after generation
export const prisma: any = null