import { useEffect, useState } from 'react'

export default function useFetchData<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url)
                const result = await response.json()
                if(!response.ok){
                    setError(result.error)
                    throw new Error(result.error)
                }
                setData(result.message)
                setError(null)
            }catch(error){
                if(error instanceof Error){
                setError(error.message)
                }else{
                    setError('An error occurred')
                }
            }
            finally{
                setIsLoading(false)
            }
        }

        fetchData().catch(console.error)
    },[url])

    return { data, isLoading, error }
}
