'use client'

import React from 'react'
import Header from './header'

export default function App ({ children }) {
  return (
    <>
      <Header />
      <main className='container m-auto mt-4 px-4'>{children}</main>
    </>
  )
}
