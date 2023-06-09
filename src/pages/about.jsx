import Loading from '@/components/Loading'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

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
            className="absolute top-0 right-0 left-0 bottom-0 flex items-end justify-center p-12
            sm:p-12
            md:p-24"
        >
            <div
                className="flex flex-col items-center gap-6 h-[95%] overflow-scroll w-full
                sm:h-[85%]
                md:flex-row md:gap-12 md:justify-center"
            >
                <div
                    className='relative aspect-square h-1/4 min-h-[100px]
                        sm:h-1/3 sm:w-1/4
                        md:w-full md:h-5/6 md:aspect-auto md:max-w-[30%]'
                >
                    <Suspense fallback={<Loading />}>
                        <Image
                            fill
                            sizes='max-w-full'
                            className="object-cover rounded-full shadow-2xl
                            sm:rounded-2xl "
                            src="/images/me2.jpg"
                            alt="Smiling kind guy"
                            blurDataURL='/images/me2reduced.jpg'
                            placeholder='blur'
                        />
                    </Suspense>
                </div>

                <p
                    className='tracking-wider text-xs leading-loose max-w-md
                    sm:text-base sm:max-w-lg
                    md:max-w-2xl md:text-lg'
                >
                    <span className='bg-blend-difference text-lg sm:text-2xl'>
                        Hi, {greetings}
                        👋 <br />
                    </span>

                    My name is Leonardo Brandt, and I am a frontend developer with a passion for creating beautiful and functional websites. I specialize in writing clean, organized, and efficient code, and I am always looking for new ways to improve my skills and stay up-to-date with the latest technologies. <br />

                    I&apos;m also passionate about cooking 🍳, sports 🏃 and playing guitar 🎸. I find these hobbies bring a sense of joy and creativity into my life.  <br />

                    Thank you for taking the time to get to know me 🤓. <br />
                    <Link
                        href={'/contact'}
                        className='mix-blend-difference bg-white'
                    >
                        <span className='mix-blend-difference'>Let&apos;s talk</span>
                    </Link>
                    <span> </span>
                    and make a positive impact in the world 🌍.
                </p>

            </div>
        </m.div>
    )
}
