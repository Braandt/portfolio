import Image from "next/image";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Card({ project, setProject }) {

    return (
        <button
            onClick={() => setProject(project)}
            className="relative flex items-center transition-all p-2 bg-gray-950 h-full aspect-video rounded-lg shadow-2xl group
            sm:p-4 sm:rounded-2xl"
        >
            <Suspense fallback={<Loading />}>
                <Image
                    width={2048}
                    height={2048}
                    sizes="w-full h-full"
                    className='object-contain transition-all rounded-lg
                    group-hover:blur-sm group-hover:scale-95'
                    src={project.images[0]}
                    alt="A screenshot of the project"
                />
            </Suspense>
            <div
                className="absolute group left-0 flex items-center justify-center transition-all duration-300 h-full w-full bg-black/0 text-3xl rounded-2xl
                hover:bg-black/80"
            >
                <h1 className="transition-all scale-0 font-bold font-rubik group-hover:scale-100">{project.title}</h1>
            </div>
        </button>
    )
}