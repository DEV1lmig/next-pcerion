import Head from 'next/head'
import './globals.css'
import Link from 'next/link'

export default function layout ({ title, children }) {
  const links = [
    {
      label: 'PCERION',
      route: '/'
    },
    {
      label: 'Cart',
      route: '/'
    },
    {
      label: 'Login',
      route: '/'
    }
  ]

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
              <Link href={links[0].route} className='p-2'>{links[0].label}</Link>
              <ul>
                <li>
                  <Link href={links[1].route} className='p-2'>{links[1].label}</Link>
                  <Link href={links[2].route} className='p-2'>{links[2].label}</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className='container m-auto mt-4 px-4'>{children}</main>
          <footer className='flex h-10 justify-center items-center shadow-inner'>
            <p>PCERION compañia anonima, nos reservamos los derechos de autor</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
