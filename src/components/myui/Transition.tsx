export function Transition ({route}:{route: boolean}) {
    return (
        <div className={`flex items-center justify-center transition-all duration-1000 rounded-full absolute bg-black h-screen w-screen ${route ? 'scale-150' : 'scale-0'} z-[200]`} />
    )
}