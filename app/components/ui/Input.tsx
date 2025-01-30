import { Controller, useFormContext } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    placeholder: string
    type: 'text' | 'email' | 'password' | 'number'
    defaultValue?: string | number
}

export default function Input({ label, name, placeholder, type,defaultValue, ...props }: InputProps){
    const formContext = useFormContext()
    if(!formContext) return(
    <div className='rounded'>
    <label>{label}</label>
    <input {...props} type={type} name={name} placeholder={placeholder} />
</div>)
else{
    return(
        <Controller
            name={name}
            control={formContext.control}
            defaultValue={defaultValue ? defaultValue : '' }
            render={({ field, fieldState }) => (
                <div className='flex flex-col'>
                <label className={`${fieldState.error ? 'text-red-500': 'text-slate-400'}`}>{label}</label>
                <input {...field} type={type} name={name} placeholder={placeholder} className={`py-2 px-3 rounded border ${fieldState.error ? 'border-red-500' : 'border-slate-400'}`}/>
                {fieldState.error && <span className='text-red-500'>{fieldState.error.message}</span>}
            </div>
            )}
            />
    )
}
}
