type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function Container({
    children,
    className = "",
}: Props) {
    return (
        <div className={`container mx-auto px-4 lg:px-8 py-8 ${className}`}>
            {children}
        </div>
    )
}
