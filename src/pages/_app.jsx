import '@/styles/globals.css'
import { Rubik, Alef, Fira_Sans } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

import Navbar from '@/components/Navbar.jsx'

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

export default function App({ Component, pageProps, router }) {

	return (
		<div
			className={`${rubik.variable} ${alef.variable} ${fira.variable}
			h-screen w-screen p-12 text-white font-fira`}
		>
			<div className='relative h-full w-full p-12 flex flex-col outline outline-8 rounded-3xl'>
				<Navbar />
				<AnimatePresence>
					<Component key={router.pathname} {...pageProps} />
				</AnimatePresence>
			</div>
		</div>
	)
}
