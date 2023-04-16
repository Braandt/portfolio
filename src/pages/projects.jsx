import { useEffect, useRef, useState } from "react";
import { motion as m } from 'framer-motion'
import Card from "@/components/Card";
import projects from '@/api/projects.json'
import ActiveProject from "@/components/ActiveProject";

export default function Projects() {

    const gallery = useRef()

    const [activeProject, setActiveProject] = useState({})
    const [galleryPos, setGalleryPos] = useState(0)

    useEffect(() => {

        const gal = gallery.current
        const parent = gal.parentElement
        let animationId = null
        let lastScrollPos = null

        parent.scrollLeft = 0

        gal.onmousemove = (e) => {
            const widthDiff = gal.offsetWidth - parent.offsetWidth
            const pan = ((e.clientX - parent.parentElement.offsetLeft) / parent.offsetWidth) * widthDiff

            cancelAnimationFrame(animationId)
            animationId = requestAnimationFrame(function update() {
                lastScrollPos += (pan - lastScrollPos) * 0.1
                parent.scrollLeft = lastScrollPos
                if (Math.abs(pan - lastScrollPos) > 0.5) {
                    animationId = requestAnimationFrame(update)
                }
            })
        }


    }, [])

    return (
        <div className="h-full rounded-xl overflow-hidden">
            <div className="relative h-full overflow-y-hidden">
                <m.div
                    initial={{ x: '100%' }}
                    animate={{ x: '0' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    exit={{ opacity: 0 }}
                    className="absolute flex top-16 h-[90%] left-0 w-full select-none overflow-x-scroll
                    sm:h-[75%] sm:top-24
                    md:h-[80%] md:top-32"
                    tabIndex={1}
                >
                    <div
                        ref={gallery}
                        className='grid gap-12 p-4
                        sm:flex sm:px-44'
                    >
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