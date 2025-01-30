import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
export default function useZodForm(schema: z.ZodType, url?: string, method?: string, redirectToHomePage?: boolean) {
    const router = useRouter()
    const form = useForm(
        {
            resolver: zodResolver(schema)
        }
    )
    const handleSubmit = form.handleSubmit(async (values) => {
        if (!url || !method) {
            return
        }
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const data = await response.json()
        if(!response.ok){
            alert(data.error)
        }
        else{
            alert(data.message)
            form.reset()
            if(redirectToHomePage){
                router.push('/')
        }
    }
        }
    )


        return {
            ...form,
            onSubmit: handleSubmit
        }
    }
