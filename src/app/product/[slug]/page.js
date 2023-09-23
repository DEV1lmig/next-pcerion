'use client'
import { Store } from '@/utils/Store'
import data from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

export default function ProductScreen ({ params }) {
  const { state, dispatch } = useContext(Store)
  const product = data.product.find(x => x.slug === params.slug)
  if (!product) {
    return <div>Product not found</div>
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug)
    const quantity = existItem ? existItem.quantity + 1 : 1

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
  }
  return (
    <div>
      <div className='py-2'>
        <Link href='/'>Back to products</Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className='text-lg font-bold'>{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>{product.rating} of {product.numReviews} review</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className='card p-5'>
          <div className='mb-2 flex justify-between'>
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className='mb-2 flex justify-between'>
            <div>Status</div>
            <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
          </div>
          <button className='primary-button w-full' onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
