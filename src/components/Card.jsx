export default function Card({ project, setProject }) {

    return (
        <div
            onClick={() => setProject(project)}
            className="relative transition-all bg-gray-900 h-full aspect-video cursor-pointer rounded-2xl shadow-2xl"
        >
            <img
                className='object-contain absolute h-full'
                src={project.images[0]}
                alt=""
            />
            <div
                className="absolute group flex items-center justify-center transition-all duration-300 h-full w-full bg-opacity-0 bg-black text-3xl
                hover:bg-opacity-80 hover:rounded-lg"
            >
                <h1 className="transition-all scale-0 group-hover:scale-100">{project.title}</h1>
            </div>
        </div>
    )
}