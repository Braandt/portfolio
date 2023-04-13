import { useEffect, useRef, useState } from "react";
import { motion as m } from 'framer-motion'
import Card from "@/components/Card";
import projects from '@/api/projects.json'
import ActiveProject from "@/components/ActiveProject";

export default function Projects() {

    const gallery = useRef()

    const [activeProject, setActiveProject] = useState({})
    const [pos, setPos] = useState({})

    useEffect(() => {
        const handleMouseMove = (event) => {

            const mouseX = event.clientX / innerWidth
            const mouseY = event.clientY / innerHeight

            const posx = gallery.current && (mouseX * 1.2 - 0.1) * (- gallery.current.offsetWidth + gallery.current.parentElement.offsetWidth)

            setPos({ x: posx, y: - mouseY })
        }

        setTimeout(() => {
            window.addEventListener('mousemove', handleMouseMove)
        }, 1000)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    !activeProject.id && gallery.current && (
        gallery.current.animate({
            transform: `translateX(${pos.x}px)`
        }, {
            duration: 3000,
            fill: 'forwards',
            easing: 'ease-out'
        })
    )

    return (
        <div className="h-full">
            <div className="relative h-full overflow-hidden">
                <m.div
                    initial={{ x: '100%' }}
                    animate={{ x: '0' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    exit={{ opacity: 0 }}
                    className="absolute flex top-40 h-[85%] left-0 w-full"
                >
                    <div ref={gallery} className='flex gap-12 px-4 h-full'>
                        {projects.map(project => (
                            <Card key={project.id} project={project} setProject={setActiveProject} />
                        ))}
                    </div>
                </m.div>
            </div>

            {activeProject.id !== undefined &&
                <ActiveProject project={activeProject} setProject={setActiveProject} />
            }
        </div>
    )
}