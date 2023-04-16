import Image from "next/image";

export default function Card({ project, setProject }) {

    return (
        <div
            onClick={() => setProject(project)}
            onKeyDown={(e) => e.key == 'Enter' && setProject(project)}
            className="relative flex items-center transition-all p-2 bg-gray-950 h-full aspect-video cursor-pointer rounded-lg shadow-2xl group
            hover:p-6
            sm:p-4 sm:rounded-2xl"
            tabIndex={1}
        >
            <Image
                width={2048}
                height={2048}
                className='object-contain h-full w-full sm:rounded-lg group-hover:blur-sm'
                src={project.images[0]}
                alt=""
            />
            <div
                className="absolute group left-0 flex items-center justify-center transition-all duration-300 h-full w-full bg-black/0 text-3xl rounded-2xl
                hover:bg-black/80"
            >
                <h1 className="transition-all scale-0 font-bold font-rubik group-hover:scale-100">{project.title}</h1>
            </div>
        </div>
    )
}