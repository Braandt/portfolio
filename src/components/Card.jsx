export default function Card({ project }) {

    return (
        <div
            className="relative transition-all bg-slate-300 aspect-video max-h-80 rounded-lg"
        >
            <img
                className='object-cover absolute rounded-lg'
                src=''
                alt=""
            />
            <div
                className="absolute transition-all h-full w-full opacity-100 bg-black
                hover:opacity-0"
            ></div>
        </div>
    )
}