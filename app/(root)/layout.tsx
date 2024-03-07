import MobileNav from '@/components/global/MobileNav';
import Sidebar from '@/components/global/Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <Sidebar />
      <MobileNav />

      <div className='root-container'>
        <div className='wrapper'>
            {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
