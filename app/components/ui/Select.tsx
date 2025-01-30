import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    label: string
    children: React.ReactNode
    name: string
    defaultValue?: string
}
export default function Select({ label, children, name,defaultValue, ...props }: SelectProps){
    const formContext = useFormContext()
    if(!formContext) return(
    <div className='rounded'>
    <label>{label}</label>
    <select {...props} name={name} />
</div>)
else{
    return(
        <Controller
            name={name}
            control={formContext.control}
            defaultValue={defaultValue || ''}
            render={({ field, fieldState }) => (
                <div className='flex flex-col'>
                <label className={`${fieldState.error ? 'text-red-500': 'text-slate-400'}`}>{label}</label>
                <select  {...field}  name={name} className={`py-2 px-3 rounded border ${fieldState.error ? 'border-red-500' : 'border-slate-400'}`}>
                {children}
                </select>
                {fieldState.error && <span className='text-red-500'>{fieldState.error.message}</span>}
            </div>
            )}
            />
    )
}
}
