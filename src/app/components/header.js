'use client'

import Link from 'next/link'
import CartNavbar from './cart-navbar'

export default function Header () {
  return (
    <header>
      <nav className='flex h-12 items-center px-4 justify-between shadow-md rounded-md'>
        <Link href='/' className='p-2'>PCERION</Link>
        <ul>
          <li>
            <CartNavbar />
            <Link href='/' className='p-2'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
