import React from 'react';

const Login = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='auth'>
      {children}
    </main>
  )
}

export default Login
