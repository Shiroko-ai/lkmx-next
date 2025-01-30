import Link from 'next/link'
import Image from 'next/image'
type Link = {
    href: string
    label: string
}

interface NavbarProps {
    links: Array<Link>
}


export default function Navbar({ links }: NavbarProps) {
    return (
        <nav className='my-5 flex justify-between items-center mx-20'>
            <Link href='/'>
            <Image
                src='/lkmx-logo.webp'
                alt='Logo'
                width={100}
                height={100}
                className='relative '
                />
            </Link>
            <ul className='flex flex-row space-x-4'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className='hover:text-red-700 text-black uppercase font-bold transition-colors duration-300'>
                            {link.label}
                        </Link>
                        </li>
                ))}
            </ul>
        </nav>
    )
}
