import { motion as m } from 'framer-motion'

export default function About() {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" absolute h-full flex"
        >
            <div className="flex items-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis officia sequi soluta odit, non praesentium consectetur eum impedit voluptatibus itaque dolores illo. Nam possimus libero ab magnam. Architecto, labore.</p>
                <img className="object-cover h-2/3" src="./images/me.png" alt="" />
            </div>
        </m.div>
    )
}
