import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='absolute top-0 left-0 right-0 p-12 flex items-center justify-between text-2xl font-alef uppercase z-10'>
            <h1 className='tracking-[12px] font-rubik'>
                Leonardo <br /> <strong>Brandt</strong>
            </h1>
            <ul className='flex gap-12'>
                <Link href={'/'}>
                    <li>Home</li>
                </Link>
                <Link href={'/projects'}>
                    <li>Projects</li>
                </Link>
                <Link href={'/about'}>
                    <li>About</li>
                </Link>
                <Link href={'/contact'}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}