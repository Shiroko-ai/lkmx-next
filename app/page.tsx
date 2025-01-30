'use client'
import { type User } from '@prisma/client'
import { Eye, Pencil } from 'lucide-react'
import THead from './components/ui/table/thead'
import useFetchData from './components/hooks/userFetchData'
import LoadingSpinner from './components/ui/LoadingSpinner'
import Table from './components/ui/table/Table'
import ErrorMessage from './components/ui/ErrorMessage'
import Td from './components/ui/table/td'
import Th from './components/ui/table/th'
import Tr from './components/ui/table/tr'
import Button from './components/ui/Button'
import Link from 'next/link'
export default function HomePage(){
    const { data, error, isLoading } = useFetchData<User[]>('/api/users')
    if(isLoading) return <LoadingSpinner />
    if(error)
        { return (
        <ErrorMessage message={error} />
    )
}
    else if(data && data.length === 0) {
        return <div>Sin datos</div>
    }
    return(
    <Table title="Usuarios">
        <THead>
        <tr>
            <Th>ID</Th>
            <Th>Nombre</Th>
            <Th>Correo electrónico</Th>
            <Th>Acciones</Th>
        </tr>
        </THead>
        <tbody>
        {data && data.map((user, index) => (
            <Tr key={index}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                    <div className='flex justify-center gap-5'>
                    <Link href={`/users/edit/${user.id}`}>
                    <Button type='button'><Pencil /></Button>
                    </Link>
                    <Link href={`/users/${user.id}`}>
                    <Button type='button'><Eye /></Button>
                    </Link>
                    </div>
                </Td>
            </Tr>
        ))}
        </tbody>
    </Table>
    )
    }
