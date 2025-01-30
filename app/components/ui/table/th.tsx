interface ThProps {
    children: React.ReactNode;
}
export default function Th({ children }: ThProps) {
    return <th className="px-6 py-3">{children}</th>;
}
