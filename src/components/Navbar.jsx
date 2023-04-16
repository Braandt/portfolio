import Link from 'next/link'
import DropdownMenu from './DropdownMenu'
import { useEffect, useState } from 'react'

export default function Navbar({ router, links }) {

    const [currentPage, setCurrentPage] = useState()

    useEffect(() => {
        setCurrentPage(router.state.route)
    }, [router.state])

    return (
        <div className='relative z-10'>
            <nav
                className='absolute top-0 left-0 w-full p-4 flex justify-between items-center font-rubik uppercase
                sm:pt-6 sm:text-sm
                md:p-12 md:text-xl md:items-center'
            >
                <Link href={links[0].path}>
                    <h1
                        className='tracking-[12px] font-rubik text-xs
                        sm:ml-4
                        md:text-base md:mb-0'
                    >
                        Leonardo <br /> <strong>Brandt</strong>
                    </h1>
                </Link>

                <ul
                    className='gap-3 hidden
                    md:gap-12
                    sm:flex'
                >
                    {links.map(link => (
                        <Link
                            key={link.label}
                            href={link.path}
                        >
                            <li
                                className={`rounded-full px-4 py-1 outline-3 transition-all duration-75
                            hover:outline hover:shadow-xl 
                            ${currentPage === link.path && 'shadow-xl bg-gray-800'}`}
                            >{link.label}</li>
                        </Link>
                    ))}
                </ul>

                <div className='flex sm:hidden'>
                    <DropdownMenu links={links} />
                </div>

            </nav>
        </div>
    )
}