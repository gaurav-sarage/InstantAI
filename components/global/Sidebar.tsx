"use client";

import { navItems } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';

const Sidebar = () => {

  const pathname = usePathname()
    
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className='sidebar-logo'>
                <Image
                    src="/assets/images/logo-text.svg"
                    alt='Logo'
                    height={28}
                    width={180}
                />
            </Link>

            <nav className='sidebar-nav'>

                {/* Render design when user is signed in */}
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navItems.slice(0,6).map((link) => {
                            const isActive = link.path === pathname

                            return (
                                <li key={link.path} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-black'}`}>
                                    <Link className='sidebar-link' href={link.path}>
                                        <Image
                                            src={link.icon}
                                            alt='Logo'
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                        {link.title}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>

                        <ul className='sidebar-nav_elements'>

                            {navItems.slice(6).map((link) => {
                                const isActive = link.path === pathname

                                return (
                                    <li
                                        key={link.path} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-black'}`
                                    }>
                                    <Link       className='sidebar-link' href={link.path}>
                                        <Image
                                            src={link.icon}
                                            alt='Logo'
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                        />
                                            {link.title}
                                    </Link>
                                </li>
                            )
                            })}
                        <li className='flex-center cursor-pointer gap-2 p-4'>
                            <UserButton afterSignOutUrl='/' showName />
                        </li>
                    </ul>
                </SignedIn>

                {/* Render design when user is signed out */}
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar
