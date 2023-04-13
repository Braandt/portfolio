import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiThreedotjs } from 'react-icons/si'
import { TbBrandNextjs, TbBrandThreejs } from 'react-icons/tb'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { motion as m } from 'framer-motion'
import { useEffect, useState } from "react";


export default function ActiveProject({ project, setProject }) {

    const icons = [
        { name: 'html', icon: <FaHtml5 /> },
        { name: 'css', icon: <FaCss3 /> },
        { name: 'javascript', icon: <FaJs /> },
        { name: 'react', icon: <FaReact /> },
        { name: 'tailwind', icon: <SiTailwindcss /> },
        { name: 'next', icon: <TbBrandNextjs /> },
        { name: 'threejs', icon: <SiThreedotjs /> }
    ]

    let projectIcons = []

    project.technologies.map(item => {
        const tech = icons.find(tech => tech.name === item)
        tech && projectIcons.push(tech.icon)
    })

    const [currentSlide, setCurrentSlide] = useState(0)

    const images = project.images
    const length = images.length

    function nextSlide() {
        setCurrentSlide(prevState => (
            prevState === length - 1 ? 0 : prevState + 1
        ))
    }

    function prevSlide() {
        setCurrentSlide(prevState => (
            prevState === 0 ? length - 1 : prevState - 1
        ))
    }

    function handleClick(e) {
        e.target.id === 'outside' &&
            setProject({})
    }

    useEffect(() => {
        document.getElementById('outside').focus()
    }, [])

    return (
        <>
            <m.div
                id="outside"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                exit={{ opacity: 0 }}
                onKeyDown={(e) => e.key === 'Escape' && setProject({})}
                onClick={handleClick}
                className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 p-16 flex gap-12 z-20"
                tabIndex={0}
            >
                <div
                    className="h-full w-3/5 bg-white/50 rounded-3xl p-6 backdrop-blur-xl"
                >
                    <div
                        className="relative h-full"
                    >
                        <div className="relative flex h-full items-center justify-center rounded-2xl">
                            {images.map((image, index) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt=""
                                    className={`absolute rounded-2xl max-w-full max-h-full object-contain select-none transition-all duration-200
                                    ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>

                        <div
                            className="absolute flex items-center aspect-square bg-white/10 backdrop-blur-md text-blue-800 rounded-full top-1/2 shadow-xl ml-3 h-10 cursor-pointer p-1"
                            onClick={prevSlide}
                        >
                            <ChevronLeftIcon className="h-full" />
                        </div>
                        <div
                            className="absolute flex items-center aspect-square bg-white/10 backdrop-blur-md text-blue-800 rounded-full top-1/2 right-0 text-lg shadow-xl mr-3 h-10 cursor-pointer p-1"
                            onClick={nextSlide}
                        >
                            <ChevronRightIcon className="h-full" />
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col h-full w-2/5 bg-gray-900 z-10 rounded-3xl p-6 select-none">
                    <h1 className="font-rubik text-3xl max-w-md">{project.title}</h1>
                    <h2 className="text-lg pb-6">{project.subtitle}</h2>
                    <p>{project.description}</p>
                    <div className="flex flex-col flex-1 justify-end">
                        <div className="flex justify-center gap-3 text-3xl">
                            {projectIcons}
                        </div>
                        <hr className="my-4" />
                        <a
                            className="bg-white text-center text-gray-900 rounded-full px-4 py-2"
                            href={project.link}
                            target="_blank"
                        >
                            VIEW LIVE
                        </a>
                    </div>

                    <div className="absolute top-6 right-8 flex gap-3 text-sm">
                        <button
                            onClick={() => setProject({})}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>

            </m.div>
        </ >
    )
}
