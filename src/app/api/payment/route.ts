import { NextResponse } from 'next/server'
import { prisma } from '@/lib/utils'

export async function POST(request: Request) {
  try {
    const { service, amount, method, phone, transactionId, userId } = await request.json()

    // Validate required fields
    if (!service || !amount || !method || !phone || !transactionId) {
      return NextResponse.json(
        { error: 'All payment fields are required' },
        { status: 400 }
      )
    }

    // Validate payment method
    if (!['bkash', 'nagad'].includes(method.toLowerCase())) {
      return NextResponse.json(
        { error: 'Invalid payment method. Use "bkash" or "nagad"' },
        { status: 400 }
      )
    }

    // Save payment to database
    const payment = await prisma.payment.create({
      data: {
        amount: parseFloat(amount),
        method: method.toLowerCase(),
        phone,
        transactionId,
        userId: userId || 'anonymous', // Handle guest payments
        service
      }
    })

    // Here you would integrate with bKash/Nagad API for verification
    console.log('Payment created:', payment)

    // Simulate payment verification (replace with real API call)
    setTimeout(async () => {
      // Update payment status after verification
      await prisma.payment.update({
        where: { id: payment.id },
        data: { status: 'completed' }
      })
    }, 5000)

    return NextResponse.json(
      { 
        message: 'Payment initiated successfully!',
        paymentId: payment.id,
        status: 'pending'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { error: 'Failed to process payment' },
      { status: 500 }
    )
  }
}

// Optional: GET method to retrieve payment status
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get('paymentId')

    if (!paymentId) {
      return NextResponse.json(
        { error: 'Payment ID is required' },
        { status: 400 }
      )
    }

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId }
    })

    if (!payment) {
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(payment)
  } catch (error) {
    console.error('Get payment error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch payment' },
      { status: 500 }
    )
  }
}