import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Rubik, Alef, Fira_Sans } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar.jsx'
import { useRouter } from 'next/router'
import Head from 'next/head'

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
	weight: ['200', '400', '700'],
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
	const [scrollCounter, setScrollCounter] = useState(0)

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

			window.removeEventListener('wheel', onScroll)
			setTimeout(() => {
				window.addEventListener('wheel', onScroll)
			}, 2000)
		}

		window.addEventListener('wheel', onScroll)

		return () => {
			window.removeEventListener('wheel', onScroll)
		}
	}, []);

	return (
		<>
			<Head>
				<title>Leo Brandt</title>
				<meta name="description" content="Currently traveling the world by bicycle. See @pedalaleo on instagram" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.svg" type="image/svg+xml" />
			</Head>
			<div
				className={`${rubik.variable} ${alef.variable} ${fira.variable}
			absolute top-0 bottom-0 left-0 right-0 p-4 text-white font-fira font-light bg-gray-900 -z-50 selection:bg-orange-600
			sm:p-6
			md:p-9`}
			>
				<div
					className='h-full w-full flex flex-col outline outline-2 rounded-xl  shadow-2xl
					sm:outline-4
					md:outline-8'
				>
					<Navbar router={router} links={links} />
					<AnimatePresence>
						<Component key={router.pathname} {...pageProps} />
					</AnimatePresence>
				</div>
			</div>
		</>
	)
}
