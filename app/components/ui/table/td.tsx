interface TdProps {
    children: React.ReactNode;
}

export default function Td({ children }: TdProps) {
    return <td className="px-6 py-4">{children}</td>;
}
