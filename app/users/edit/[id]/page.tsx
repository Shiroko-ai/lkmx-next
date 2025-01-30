'use client'
import useFetchData from '@/app/components/hooks/userFetchData';
import ErrorMessage from '@/app/components/ui/ErrorMessage';
import Form from '@/app/components/ui/Form';
import Input from '@/app/components/ui/Input';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import Select from '@/app/components/ui/Select';
import { userSchema } from '@/utils/zodSchemas';
import { useParams } from 'next/navigation';
import { User } from '@prisma/client'
export default function Page(){
    const params = useParams<{id: string}>()
   const { data, isLoading, error } = useFetchData<User>('/api/users/'+params.id)
    if(isLoading) {
        return <LoadingSpinner />
    }
    if(error)
        { return (
        <ErrorMessage message={error} />
    )
}
    else{
        return(
           <Form title="Actualizar usuario" schema={userSchema} submitButtonText='Actualizar' url={`/api/users/${params.id}`} method='PUT'>
                   <Input name='email' label='Correo' placeholder='Correo' type='email' defaultValue={data?.email}/>
                   <Input name='name' label='Nombre' placeholder='Nombre' type='text' defaultValue={data?.name}/>
                   <Input name='lastName' label='Apellido' placeholder='Apellido' type='text' defaultValue={data?.lastName}/>
                   <Select label="Género" name="gender" defaultValue={data?.gender}>
                           <option value='' disabled>Selecciona un género</option>
                           <option value='male'>Masculino</option>
                           <option value='female'>Femenino</option>
                           <option value='other'>Otro</option>
                       </Select>
                   <Input name='age' label='Edad' placeholder='Edad' type='number' defaultValue={data?.age}/>
                   <Input name='password' label='Password' placeholder='Password' type='password'/>
                   <Input name='confirmPassword' label='Confirm Password' placeholder='Password' type='password'/>
                   <Select label="Rol" name="role" defaultValue={data?.role}>
                           <option value='' disabled>Selecciona un rol</option>
                           <option value='admin'>Administrador</option>
                           <option value='user'>Usuario</option>
                   </Select>
               </Form>
        )
    }
}
