interface TrProps {
    children: React.ReactNode;
}

export default function Tr({ children }: TrProps) {
    return (
    <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50">
        {children}
    </tr>)
}
