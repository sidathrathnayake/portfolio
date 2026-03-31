type Props = {
    tabTitle: string;
}

export default function TabHeader({
    tabTitle
}: Props) {
    return (
        <div className="sticky top-0 w-full px-6 border-b border-white/10 justify-center items-center text-center bg-white/5 backdrop-blur-md z-30 shadow-lg hover:shadow-xl transition-shadow duration-500">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-gray-200 py-4 sm:py-6 uppercase drop-shadow-lg">{tabTitle}</h1>
        </div>
    )
}
