import { FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiThreedotjs } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import Image from "next/image";


export default function ActiveProject({ project, setProject }) {

    const icons = [
        { name: 'html', icon: (key) => <FaHtml5 key={key} /> },
        { name: 'css', icon: (key) => <FaCss3 key={key} /> },
        { name: 'javascript', icon: (key) => <FaJs key={key} /> },
        { name: 'react', icon: (key) => <FaReact key={key} /> },
        { name: 'tailwind', icon: (key) => <SiTailwindcss key={key} /> },
        { name: 'next', icon: (key) => <TbBrandNextjs key={key} /> },
        { name: 'threejs', icon: (key) => <SiThreedotjs key={key} /> }
    ]

    let projectIcons = []

    project.technologies.map(item => {
        const tech = icons.find(tech => tech.name === item)
        tech && projectIcons.push(tech.icon(tech.name))
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

    return (
        <>
            <div
                className="h-full min-h-[200px] bg-white/50 rounded-xl p-3 backdrop-blur-xl
                    md:w-3/5 md:rounded-3xl md:p-6"
            >
                <div
                    className="relative flex items-center h-full"
                >
                    <div className="relative flex w-full h-full items-center justify-center">
                        {images.map((image, index) => (
                            <Image
                                fill
                                sizes="max-w-full"
                                key={image}
                                src={image}
                                alt="Screenshot of the project"
                                className={`absolute rounded-lg max-h-full object-contain select-none transition-all duration-200
                                    ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>

                    <button
                        className="absolute flex items-center aspect-square bg-white/10 backdrop-blur-md text-blue-800 rounded-full shadow-xl ml-3 h-8 cursor-pointer p-1
                            sm:h-10"
                        onClick={prevSlide}
                    >
                        <ChevronLeftIcon className="h-full" />
                    </button>
                    <button
                        className="absolute flex items-center aspect-square bg-white/10 backdrop-blur-md text-blue-800 rounded-full right-0 text-lg shadow-xl mr-3 h-8 cursor-pointer p-1
                            sm:h-10"
                        onClick={nextSlide}
                    >
                        <ChevronRightIcon className="h-full" />
                    </button>
                </div>
            </div>

            <div
                className="relative flex flex-col h-full bg-gray-950 z-10 rounded-xl p-4 select-none
                    md:w-2/5 md:rounded-3xl md:p-6"
            >
                <h1 className="font-rubik text-2xl font-semibold max-w-md">{project.title}</h1>
                <h2 className="text-lg pb-6">{project.subtitle}</h2>
                <p className="whitespace-pre-line mb-3">{project.description}</p>
                <div className="flex flex-col flex-1 justify-end">
                    <div
                        className="flex justify-center gap-3 text-lg
                            sm:text-2xl
                            md:text-3xl"
                    >
                        {projectIcons}
                    </div>
                    <hr className="my-4" />
                    <div className="w-full flex items-center">
                        <a
                            className="bg-white text-center text-gray-900 w-1/2 rounded-s-full px-4 py-2 text-sm font-bold
                            md:text-base"
                            href={project.link}
                            target="_blank"
                        >
                            OPEN 🌐
                        </a>
                        <div className="h-4/6 outline outline-1 outline-gray-400"></div>
                        <a
                            className="bg-white text-gray-900 w-1/2 rounded-e-full border-l px-4 py-2 text-sm font-bold flex items-center gap-2 justify-center overflow-hidden overflow-ellipsis whitespace-nowrap
                            md:text-base"
                            href={project.repository}
                            target="_blank"
                        >
                            Git Repository
                            <FaGithub className="min-w-fit" />
                        </a>
                    </div>
                </div>

                <div
                    className="absolute top-6 right-8 flex gap-3 text-xs
                        md:text-sm"
                >
                    <button
                        onClick={() => setProject({})}
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </ >
    )
}
