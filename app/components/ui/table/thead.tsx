interface THeadProps {
    children: React.ReactNode;
}

export default function THead({ children }: THeadProps) {
    return <thead className="text-xs text-gray-700 uppercase bg-gray-50">{children}</thead>;

}
