import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const imageStyle = {
  borederRadius: '20%',
  width: '300px',
  height: '300px',
  objectFit: 'cover'
}

export default function ProductItem ({ product }) {
  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          width={200}
          height={200}
          style={imageStyle}
          alt={product.name}
          className='rounded shadow'
        />
      </Link>

      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text.lg'>{product.name}</h2>
        </Link>
        <p className='mb-2'>{product.brand}</p>
        <p className='mb-2'>${product.price}</p>
        <button className='primary-button' type='button'>
          Add to cart
        </button>
      </div>
    </div>
  )
}
