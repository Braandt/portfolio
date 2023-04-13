import { motion as m } from 'framer-motion'
import Link from 'next/link'

export default function About() {

    const time = new Date().getHours()

    const greetings = time < 12 ? 'Good morning!' :
        time < 18 ? 'Good afternoon!' :
            'Good evening!'


    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute flex items-center justify-center h-full w-full top-0 left-0"
        >
            <div className="flex items-center justify-center w-4/5 h-4/5 gap-12 pt-24">
                <img className="rounded-xl bg-blend-difference object-cover h-4/5" src="./images/me2.jpg" alt="" />
                <p className='tracking-wider text-lg leading-loose max-w-2xl'>
                    <span className='bg-blend-difference text-2xl'>
                        Hi, {greetings}
                        👋 <br />
                    </span>

                    My name is Leonardo Brandt, and I am a frontend developer with a passion for creating beautiful and functional websites. I specialize in writing clean, organized, and efficient code, and I am always looking for new ways to improve my skills and stay up-to-date with the latest technologies. <br />

                    I'm also passionate about cooking 🍳, sports 🏃 and playing guitar 🎸. I find these hobbies bring a sense of joy and creativity into my life.  <br />

                    Thank you for taking the time to get to know me 🤓. <br />
                    <Link
                        href={'/contact'}
                        className='mix-blend-difference bg-white'
                    >
                        <span className='mix-blend-difference'>Let's talk</span>
                    </Link>
                    <span> </span>
                    and make a positive impact in the world 🌍.
                </p>
            </div>
        </m.div>
    )
}
