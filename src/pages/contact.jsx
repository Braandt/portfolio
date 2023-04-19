import { motion as m } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {

    const [icon, setIcon] = useState()

    const iconClasses = 'absolute w-full h-4/5 text-orange-500'

    const items = [
        { path: 'mailto: leoobrandt@hotmail.com', label: 'Email', icon: <FaEnvelope className={iconClasses} /> },
        { path: 'https://www.linkedin.com/in/brandtl/', label: 'LinkedIn', icon: <FaLinkedin className={iconClasses} /> },
        { path: 'https://github.com/Braandt', label: 'GitHub', icon: <FaGithub className={iconClasses} /> },
        { path: 'https://leobrandtresume.vercel.app/', label: 'Resume', icon: <FaFile className={iconClasses} /> }
    ]

    function handleHover(e) {
        const item = items.find(item => item.label === e.target.id)
        item && setIcon(item.icon)
    }

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute flex h-full w-full items-center justify-center top-0 left-0"
        >
            <div className='relative flex items-center justify-center w-4/5 h-4/5 mt-24'>
                {icon}
                <div className='absolute flex flex-col items-center gap-6'>
                    {items.map(item => (
                        <a
                            id={item.label}
                            href={item.path}
                            key={item.label}
                            target='_blank'
                            className='flex justify-center w-56 bg-white text-gray-800 py-2 text-lg rounded-full  font-normal font-rubik shadow-2xl outline outline-0 outline-white transition-all backdrop-blur-lg
                            hover:outline-4 hover:bg-transparent hover:text-white
                            focus:outline-4 focus:bg-transparent focus:text-white
                            sm:w-80 sm:text-3xl'
                            onMouseEnter={e => handleHover(e)}
                            onFocus={e => handleHover(e)}
                            onMouseLeave={() => setIcon()}
                            onBlur={() => setIcon()}
                            tabIndex={1} // 
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </m.div>
    )
}
