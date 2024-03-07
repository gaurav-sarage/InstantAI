"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { navItems } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
        <Link href="/" className="flex items-center gap-2 md:py-2">
            <Image
                src="/assets/images/logo-text.svg"
                alt="Logo"
                width={180}
                height={28}
            />
        </Link>

        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />

                <Sheet>
                    <SheetTrigger>
                        <Image
                            src="/assets/icons/menu.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                    </SheetTrigger>
                    <SheetContent className="sheet-content sm:w-64">
                        <>
                            <Image
                                src="/assets/images/logo-text.svg"
                                alt="Logo"
                                width={152}
                                height={23}
                            />

                            <ul className="header-nav_elements">
                                {navItems.map((link) => {
                                    const isActive = link.path === pathname

                                    return (
                                        <li
                                            key={link.path}
                                            className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-black`}>
                                            <Link className="cursor-pointer sidebar-link" href={link.path}>
                                                <Image
                                                    src={link.icon}
                                                    alt="Logo"
                                                    width={24}
                                                    height={24}
                                                />
                                                {link.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>
            </SignedIn>

            <SignedOut>
                <Button asChild className="button bg-purple-gradient bg-cover">
                    <Link href="/login">
                        Login
                    </Link>
                </Button>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav
