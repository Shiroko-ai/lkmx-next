import { z } from 'zod'
export const userSchema = z.object({
    email: z.string().email({
        message: 'Correo inválido'
    }),
    name: z.string().min(3, {
        message: 'El nombre debe tener al menos 3 caracteres'
    }).max(100, {
        message: 'El nombre excede el límite de 100 caracteres'
    }),
    lastName: z.string().min(3, {
        message: 'El nombre debe tener al menos 3 caracteres'
    }).max(100, {
        message: 'El nombre excede el límite de 100 caracteres'
    }),
    gender: z.enum(['female', 'male', 'other'], {
        message: 'El género debe ser femenino, masculino u otro'
    }),
    age: z.coerce.number({
        message: 'La edad debe se un número'
    }).min(3, {
        message: 'La edad debe ser mayor a 3 años'
    }).max(100, {
        message: 'La edad no puede exceder los 100 años'
    }),
    password: z.string().min(8,{
        message: 'La contraseña debe tener al menos 8 caracteres'
    }),
    confirmPassword: z.string(),
    role: z.enum(['admin', 'user'], {
        message: 'El rol debe ser administrador o usuario'
    })
}).superRefine(({ password, confirmPassword }, ctx) =>{
    if(password !== confirmPassword){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Las contraseñas no coinciden',
            path: ['confirmPassword']
        })
    }
})
