'use client'

import { useRouter, usePathname } from 'next/navigation'

export function useNavigation() {
  const router = useRouter()
  const pathname = usePathname()

  const navigate = (href: string) => {
    if (href === pathname) return
    
    // Simple navigation without loading for now
    router.push(href)
  }

  return { navigate }
}