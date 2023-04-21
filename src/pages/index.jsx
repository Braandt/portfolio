import { motion as m } from 'framer-motion'
import { Suspense, lazy } from 'react'

const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })))

const FaCss3 = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCss3 })))
const FaHtml5 = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHtml5 })))
const FaJs = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaJs })))
const FaReact = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaReact })))
const SiThreedotjs = lazy(() => import('react-icons/si').then(module => ({ default: module.SiThreedotjs })))
const TbBrandNextjs = lazy(() => import('react-icons/tb').then(module => ({ default: module.TbBrandNextjs })))

const icons = [
	{ name: 'CSS', icon: FaCss3 },
	{ name: 'HTML', icon: FaHtml5 },
	{ name: 'JavaScript', icon: FaJs },
	{ name: 'React', icon: FaReact },
	{ name: 'Three.js', icon: SiThreedotjs },
	{ name: 'Next.js', icon: TbBrandNextjs }
]

const Galaxy = lazy(() => import('@/components/Galaxy'))

export default function Home() {

	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, top: true }}
			transition={{ duration: 0.75, ease: 'easeOut' }}
			exit={{ opacity: 0 }}
			className='absolute top-0 left-0 w-full h-full cursor-default'
		>
			<div className="relative h-full w-full">
				<div className="absolute h-full w-full -z-10">
					<Suspense fallback={<LoadingGalaxy />}>
						<Canvas
							camera={{
								fov: 45,
								near: 0.1,
								far: 50,
								position: [100, 4, 4]
							}}
						>
							<Galaxy />
						</Canvas>
					</Suspense>
				</div>
				<div
					className='h-full flex flex-col p-12
					md:p-24
					'
				>

					<div
						className='flex flex-1 items-center justify-center
					sm:justify-end'
					>
						<h1
							className='font-rubik uppercase text-center tracking-[20px] leading-loose text-sm whitespace-nowrap -mr-4
						sm:text-right sm:text-5xl
						md:text-8xl'
						>
							Front-End <br /> <strong className='' >Developer</strong>
						</h1>
					</div>
					<div
						className='flex flex-wrap text-lg text-right gap-10 font-alef justify-center
					sm:justify-end'
					>
						<Suspense>
							{icons.map((Icon, index) => (
								<div className='relative group flex justify-center'>
									<Icon.icon key={index} className='hover:scale-150 origin-bottom transition-all' />
									<h1 className='absolute -top-10 opacity-0 group-hover:opacity-100 transition-all'>{Icon.name}</h1>
								</div>
							))}
						</Suspense>
					</div>
				</div>

			</div>
		</m.div>
	)
}

function LoadingGalaxy() {
	return (
		<div
			className='absolute h-full w-full flex items-end font-bold justify-center animate-pulse pb-44
		sm:p-24 sm:text-3xl sm:justify-start'
		>
			wait for it...</div>
	)
}