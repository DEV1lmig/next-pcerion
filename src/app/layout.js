import App from './components/app'
import './globals.css'
import { StoreProvider } from '@/utils/Store'

export const metadata = {
  title: 'PCERION',
  route: '/'
}

export default function RootLayout ({ children }) {
  return (
    <html>
      <body>
        <div className='flex flex-col justify-between min-h-screen'>
          <StoreProvider>
            <App>{children}</App>
          </StoreProvider>
          <footer className='flex h-10 justify-center items-center shadow-inner'>
            <p>PCERION compañia anonima, nos reservamos los derechos de autor</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
