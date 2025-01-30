'use client'

import React from 'react';
import useZodForm from '../hooks/useZodForm';
import { z } from 'zod';
import Button from './Button';
import { FormProvider } from 'react-hook-form';

interface FormProps extends React.HTMLProps<HTMLFormElement> {
    children: React.ReactNode
    schema: z.ZodType<unknown>
    submitButtonText: string
    url?: string
    title: string
    method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    redirectToHomePage?: boolean
}


export default function Form({ children, schema, submitButtonText, url, title, method, redirectToHomePage }: FormProps){
    const formControl = useZodForm(schema, url, method, redirectToHomePage)

    return (
        <div className='shadow-lg p-5 rounded mx-auto w-full md:w-1/3'>
        <h1 className='text-4xl mb-6'>{title}</h1>
        <FormProvider {...formControl}>
        <form onSubmit={formControl.onSubmit} className='flex flex-col gap-4'>
            {children}
            <Button type='submit' className='my-5 w-[25%] self-end'>{submitButtonText}</Button>
        </form>
        </FormProvider>
        </div>
    )
}
