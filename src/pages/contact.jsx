import { motion as m } from 'framer-motion'

export default function Contact() {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=""
        >
            <h1 className='absolute text-3xl font-alef mix-blend-difference'>
                Contact
            </h1>
        </m.div>
    )
}
