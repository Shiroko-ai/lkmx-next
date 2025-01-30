'use client'
import useFetchData from '@/app/components/hooks/userFetchData';
import ErrorMessage from '@/app/components/ui/ErrorMessage';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import { useParams } from 'next/navigation';
import { Gender, Role, User } from '@prisma/client'
import Table from '@/app/components/ui/table/Table';
import THead from '@/app/components/ui/table/thead';
import Th from '@/app/components/ui/table/th';
import Tr from '@/app/components/ui/table/tr';
import Td from '@/app/components/ui/table/td';
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
        if(!data) {
            return <ErrorMessage message='No se encontraron datos' />
        }
        return(
            <>
            <Table title={`Datos de ${data?.name}`}>
        <THead>
        <tr>
            <Th>Elemento</Th>
            <Th>Valor</Th>
        </tr>
        </THead>
        <tbody>

        <Tr>
            <Td>Email</Td>
            <Td>{data.email}</Td>
        </Tr>
        <Tr>
            <Td>Nombre</Td>
            <Td>{data.name}</Td>
        </Tr>
        <Tr>
            <Td>Apellido</Td>
            <Td>{data.lastName}</Td>
        </Tr>
        <Tr>
            <Td>Rol</Td>
            <Td>{data.role === 'user' as Role ? 'Usuario': 'Administrador'}</Td>
        </Tr>
        <Tr>
            <Td>Genero</Td>
            <Td>{data.gender === 'male' as Gender ?'Masculino' :  data.gender === 'female' as Gender ? 'Femenino': 'Otro'}</Td>
        </Tr>
        <Tr>
            <Td>Edad</Td>
            <Td>{data.age}</Td>
        </Tr>

        </tbody>
    </Table>
    </>
        )
    }
}
