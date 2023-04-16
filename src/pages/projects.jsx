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

        // if (innerWidth > 1024) {
        //     gallery.current.onmousemove = (event) => {

        //         const mouseX = event.clientX / innerWidth
        //         const mouseY = event.clientY / innerHeight

        //         const posx = gallery.current && (mouseX * 1.2 - 0.1) * (- gallery.current.offsetWidth + gallery.current.parentElement.offsetWidth)

        //         gallery.current.scrollLeft = posx

        //         // gallery.current.animate({
        //         //     transform: `translateX(${posx}px)`
        //         // }, {
        //         //     duration: 24000,
        //         //     fill: 'forwards',
        //         //     easing: 'ease-out'
        //         // })
        //     }
        // } else {

        // let isDown = false;
        // let startX;
        // let scrollLeft;

        // gallery.current.onmousedown = (e) => {
        //     isDown = true
        //     startX = e.pageX - gallery.current.offsetLeft
        //     scrollLeft = gallery.current.scrollLeft
        // }
        // gallery.current.onmouseleave = () => {
        //     isDown = false
        // }
        // gallery.current.onmouseup = () => {
        //     isDown = false
        // }
        // gallery.current.onmousemove = (e) => {
        //     if (!isDown) return
        //     const x = e.pageX - gallery.current.offsetLeft
        //     const walk = (x - startX) * 3; //scroll-fast
        //     gallery.current.scrollLeft = scrollLeft - walk
        // }
        // }

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

            // parent.scrollTo({ left: pan, behavior: 'smooth' })
            // console.log(parent.scrollLeft, pan);
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
                    md:h-[95%] md:top-32"
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