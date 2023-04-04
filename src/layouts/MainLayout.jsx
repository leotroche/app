import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

export function MainLayout() {
  return (
    <div className='bg-secondary font-netflix text-primary'>
      <Header />
      <div className='min-h-screen space-y-4 overflow-hidden px-main-layout'>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
