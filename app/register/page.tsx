'use client'

import Form from '../components/ui/Form';
import { userSchema } from '@/utils/zodSchemas';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
export default function RegisterUserPage(){
    return(
    <Form title="Registrar usuario" schema={userSchema} submitButtonText='Registrar' url='/api/users' method='POST'>
        <Input name='email' label='Correo' placeholder='Correo' type='email'/>
        <Input name='name' label='Nombre' placeholder='Nombre' type='text'/>
        <Input name='lastName' label='Apellido' placeholder='Apellido' type='text'/>
        <Select label="Género" name="gender">
                <option value='' disabled>Selecciona un género</option>
                <option value='male'>Masculino</option>
                <option value='female'>Femenino</option>
                <option value='other'>Otro</option>
            </Select>
        <Input name='age' label='Edad' placeholder='Edad' type='number'/>
        <Input name='password' label='Password' placeholder='Password' type='password'/>
        <Input name='confirmPassword' label='Confirm Password' placeholder='Password' type='password'/>
        <Select label="Rol" name="role">
                <option value='' disabled>Selecciona un rol</option>
                <option value='admin'>Administrador</option>
                <option value='user'>Usuario</option>

        </Select>
    </Form>
    )
}
