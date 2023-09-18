import data from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductScreen ({ params }) {
  const product = data.product.find(x => x.slug === params.slug)
  if (!product) {
    return <div>Product not found</div>
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
        <div className='card-body card-normal card-bordered p-5'>
          <div className='mb-2 flex justify-between'>
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className='mb-2 flex justify-between'>
            <div>Status</div>
            <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
          </div>
          <button className='btn btn-primary w-full'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
