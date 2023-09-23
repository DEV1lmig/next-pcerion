'use client'

import { Store } from '@/utils/Store'
import Link from 'next/link'
import { useContext } from 'react'

export default function CartNavbar () {
  const { state } = useContext(Store)
  const { cart } = state

  return (
    <Link href='/' className='p-2'>
      Cart
      {cart.cartItems.length > 0 && (
        <span className='cart-span'>
          {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
        </span>
      )}
    </Link>
  )
}
