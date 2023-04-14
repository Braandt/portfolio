export default function Card({ project, setProject }) {

    return (
        <div
            onClick={() => setProject(project)}
            className="relative flex items-center p-4 transition-all bg-gray-900/50 h-full aspect-video cursor-pointer rounded-2xl shadow-2xl group
            hover:p-6"
        >
            <img
                className='object-contain w-full rounded-lg group-hover:blur-sm'
                src={project.images[0]}
                alt=""
            />
            <div
                className="absolute group left-0 flex items-center justify-center transition-all duration-300 h-full w-full bg-opacity-0 bg-black text-3xl rounded-2xl
                hover:bg-opacity-80"
            >
                <h1 className="transition-all scale-0 font-bold font-rubik group-hover:scale-100">{project.title}</h1>
            </div>
        </div>
    )
}