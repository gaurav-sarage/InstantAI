import { UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
      <p>Home Page</p>

      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home
