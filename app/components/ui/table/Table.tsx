interface TableProps {
    title: string
    children: React.ReactNode
}


export default function Table({ title, children }: TableProps) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 md:w-1/2 mx-auto">
            <h1 className="text-2xl font-bold mb-3">{title}</h1>
            <table className="w-full text-sm text-left rtl:text-right">
                {children}
            </table>
        </div>
    )

}
