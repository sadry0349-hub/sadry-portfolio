import { NextResponse } from 'next/server'
import { prisma } from '@/lib/utils'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Save to database
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message
      }
    })

    // Here you would typically send an email
    console.log('Contact form submission:', { name, email, subject, message })

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

// Optional: Add GET method to retrieve contacts (for admin)
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 50 // Limit to last 50 contacts
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}