'use client'

import { useLoading } from '@/contexts/LoadingContext'
import Loading from './Loading'

export default function ClientApp({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading()
  
  return (
    <>
      <Loading />
      {children}
    </>
  )
}