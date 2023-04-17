import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion as m } from 'framer-motion'
import projects from '@/api/projects.json'
import Loading from "@/components/Loading";

const ActiveProject = lazy(() => import('@/components/ActiveProject'))
const Card = lazy(() => import('@/components/Card'))

export default function Projects() {

    const gallery = useRef()
    const container = useRef()
    const activeBackground = useRef()

    const [activeProject, setActiveProject] = useState({})

    useEffect(() => {

        const gal = gallery.current
        const parent = gal.parentElement
        let animationId = null
        let lastScrollPos = null

        container.current.onmousemove = (e) => {
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

        activeBackground.current &&
            (activeBackground.current.onclick = (e) => { e.target == activeBackground.current && setActiveProject({}) }) &&
            activeBackground.current.focus()

    }, [activeProject])

    return (
        <div className="h-full rounded-xl overflow-hidden">
            <div
                className="relative h-full overflow-y-hidden"
                ref={container}
            >
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
                        className='flex flex-col gap-3 p-4 w-full
                        sm:flex-row sm:px-44 sm:w-auto sm:gap-12'
                    >
                        <Suspense>
                            {projects.map(project => (
                                <Card key={project.id} project={project} setProject={setActiveProject} />
                            ))}
                        </Suspense>
                    </div>
                </m.div>
            </div>

            {activeProject.id !== undefined &&
                <m.div
                    ref={activeBackground}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    onKeyDown={(e) => e.key === 'Escape' && setActiveProject({})}
                    className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 p-3 flex flex-col gap-3 z-20 select-none
                    md:p-16 md:flex-row md:gap-12"
                    tabIndex={0}
                >
                    <Suspense fallback={<Loading />}>
                        <ActiveProject project={activeProject} setProject={setActiveProject} />
                    </Suspense>
                </m.div>
            }
        </div>
    )
}