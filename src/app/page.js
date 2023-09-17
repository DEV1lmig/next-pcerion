import data from '@/utils/data'
import ProductItem from './components/product-item'

export default function Home () {
  return (
    <main className=''>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data.product.map((product) => (
          <ProductItem product={product} key={product.slug}>Products</ProductItem>
        ))}
      </div>
    </main>
  )
}
