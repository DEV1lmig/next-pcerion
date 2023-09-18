import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function ProductItem ({ product }) {
  return (
    <div className='card-body card-normal card-bordered'>
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.name}
          className='rounded shadow items-center w-[100%] h-[300px]'
        />
      </Link>

      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${product.slug}`} className='card-title'>
          <h2 className='text.lg'>{product.name}</h2>
        </Link>
        <p className='mb-2'>{product.brand}</p>
        <p className='mb-2'>${product.price}</p>
        <button className='btn btn-primary items-center card-actions' type='button'>
          Add to cart
        </button>
      </div>
    </div>
  )
}
