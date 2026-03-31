export function DetailSection({
    icon: Icon,
    label,
    children
}: any) {
    return (
        <div className="flex items-start gap-4">
            <Icon className="h-6 w-6 text-white/80 mt-1 shrink-0" />
            <div>
                <p className="text-base font-semibold text-white">{label}</p>
                <p className="text-base text-white/80">{children}</p>
            </div>
        </div>
    )
}