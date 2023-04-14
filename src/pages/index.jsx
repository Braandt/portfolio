import { motion as m } from 'framer-motion'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'

export default function Home() {

	return (
		<>
			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, top: true }}
				transition={{ duration: 0.75, ease: 'easeOut' }}
				exit={{ opacity: 0 }}
				className='absolute top-0 left-0 w-full h-full p-12 flex flex-col
				md:p-24
				'
			>
				<div
					className='flex flex-1 items-center justify-center
					sm:justify-end'
				>
					<h1
						className='font-rubik uppercase text-center tracking-[20px] leading-loose text-xl whitespace-nowrap -mr-4
						sm:text-right sm:text-5xl
						md:text-8xl'
					>
						Front-End <br /> <strong className='' >Developer</strong>
					</h1>
				</div>
				<div
					className='flex text-lg text-right gap-10 font-alef justify-center
					sm:justify-end'
				>
					<FaHtml5 />
					<FaCss3 />
					<FaJs />
					<FaReact />
				</div>
			</m.div>
		</>
	)
}
