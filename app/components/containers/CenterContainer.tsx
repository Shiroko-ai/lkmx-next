interface CenterContainerProps {
    children: React.ReactNode;
}

export default function CenterContainer ({ children } : CenterContainerProps) {
    return(
        <div className="flex justify-center items-center h-screen">
            {children}
        </div>
    )
}
