import '@/styles/globals.css'
import { Rubik, Alef, Fira_Sans } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import Navbar from '@/components/Navbar.jsx'
import { useRouter } from 'next/router'

const rubik = Rubik({
	subsets: ['latin'],
	variable: '--font-rubik'
})
const alef = Alef({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-alef'
})
const fira = Fira_Sans({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-fira'
})

const links = [
	{ path: '/', label: 'Home' },
	{ path: '/projects', label: 'Projects' },
	{ path: '/about', label: 'About' },
	{ path: '/contact', label: 'Contact' },
]

export default function App({ Component, pageProps, router }) {

	const { push } = useRouter()

	useEffect(() => {
		const onScroll = (event) => {
			const page = links.find((item) => (item.path === router.state.pathname))
			const index = links.indexOf(page)
			const direction = event.deltaY > 0 ? 1 : -1

			if (index === 0) {
				direction === 1 && push(links[index + direction].path)
			} else if (index === links.length - 1) {
				direction === -1 && push(links[index + direction].path)
			} else {
				push(links[index + direction].path)
			}

		}

		window.addEventListener('wheel', onScroll);

		return () => {
			window.removeEventListener('wheel', onScroll);
		}
	}, []);

	return (
		<div
			className={`${rubik.variable} ${alef.variable} ${fira.variable}
			h-screen w-screen p-6 text-white font-fira bg-blue-800
			md:p-12`}
		>
			<div
				className='h-full w-full flex flex-col outline outline-4 rounded-xl
				md:outline-8'
			>
				<Navbar router={router} links={links} />
				<AnimatePresence>
					<Component key={router.pathname} {...pageProps} />
				</AnimatePresence>
			</div>
		</div>
	)
}
