'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useState } from 'react'
type Link = {
    href: string
    label: string
}

interface NavbarProps {
    links: Array<Link>
}


export default function Navbar({ links }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='my-5 flex justify-between items-center w-full'>
            <div className='container mx-auto flex justify-between items-center'>
            <div className='block md:hidden' />
            <Link href='/'>
            <Image
                src='/lkmx-logo.webp'
                alt='Logo'
                width={100}
                height={100}
                className='relative '
                />
            </Link>
            <ul className='hidden md:flex md:flex-row space-x-4'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className='hover:text-red-700 text-black uppercase font-bold transition-colors duration-300'>
                            {link.label}
                        </Link>
                        </li>
                ))}
            </ul>
            {/* Mobile Burguer Button */}
            <div className='block md:hidden mr-4' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu />
            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className='flex flex-col items-center justify-center h-full space-y-4'>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className='hover:text-red-700 text-black uppercase font-bold transition-colors duration-300'>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            </div>

        </nav>
    )
}
