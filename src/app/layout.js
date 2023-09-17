import Head from 'next/head'
import './globals.css'
import Link from 'next/link'

export default function layout ({ title, children }) {
  return (
    <html>
      <Head>
        <title>{title ? title + '- PCERION' : 'PCERION'}</title>
        <meta name='description' content='PC ecommerce website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <div className='flex flex-col justify-between min-h-screen'>
          <header>
            <nav className='flex h-12 items-center px-4 justify-between shadow-md rounded-md'>
              <Link href='/' className='text-lg font-bold'>PCERION</Link>
              <div>
                <Link href='/' className='p-2'>Cart</Link>
                <Link href='/' className='p-2'>Login</Link>
              </div>
            </nav>
          </header>
          <main className='container m-auto mt-4 px-4'>{children}</main>
          <footer className='flex h-10 justify-center items-center shadow-inner'>PCERION compañia anonima, nos reservamos los derechos de autor</footer>
        </div>
      </body>
    </html>
  )
}
