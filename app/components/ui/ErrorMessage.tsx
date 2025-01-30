interface ErrorMessageProps {
    message: string;
}
export default function ErrorMessage({ message }: ErrorMessageProps){
    return(
        <>
        <h1 className="text-2xl font-bold mb-5">Error</h1>
        <p className="text-slate-400">{message}</p>
        </>
    )
}
