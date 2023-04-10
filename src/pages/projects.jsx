import { useEffect, useRef, useState } from "react";
import { motion as m } from 'framer-motion'

import Card from "@/components/Card";
import projects from '@/api/projects.json'

export default function Projects() {

    const gallery = useRef()

    const [pos, setPos] = useState({})

    const projectsElement = projects.map(value => (
        <Card key={value.id} project={value} />
    ))

    useEffect(() => {
        const handleMouseMove = (event) => {

            const mouseX = event.clientX / innerWidth
            const mouseY = event.clientY / innerHeight

            const posx = gallery.current && ((mouseX * 1.4) - 0.2) * (-gallery.current.offsetWidth + window.innerWidth)

            setPos({ x: posx, y: - mouseY })
        }

        setTimeout(() => {
            window.addEventListener('mousemove', handleMouseMove)
        }, 1000)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    gallery.current && (
        gallery.current.animate({
            transform: `translateX(${pos.x}px)`
        }, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease'
        })
    )

    return (
        <m.div
            initial={{ x: '100%' }}
            animate={{ x: '0' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            exit={{ opacity: 0 }}
            className="absolute top-40 h-[85%] left-0 w-[160%]"
        >
            <div ref={gallery} className='grid grid-cols-6 gap-12 px-4 h-full w-full'>
                {projectsElement}
            </div>
        </m.div>
    )
}
