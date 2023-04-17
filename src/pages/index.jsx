import { motion as m } from 'framer-motion'
import { Suspense, lazy } from 'react'

const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })))

const icons = ['FaCss3', 'FaHtml5', 'FaJs', 'FaReact'].map(componentName =>
	lazy(() => import(`react-icons/fa`).then(module => ({ default: module[componentName] })))
);

const SiThreedotjs = lazy(() => import('react-icons/si').then(module => ({ default: module.SiThreedotjs })))
const TbBrandNextjs = lazy(() => import('react-icons/tb').then(module => ({ default: module.TbBrandNextjs })))

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
								<Icon key={index} />
							))}
							<SiThreedotjs />
							<TbBrandNextjs />
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