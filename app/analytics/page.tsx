'use client'

import useFetchData from '../components/hooks/userFetchData';
import ErrorMessage from '../components/ui/ErrorMessage';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Chart from '../components/ui/Chart';

export default function Page() {
    const { data, isLoading, error } = useFetchData<{roles: { name: string; value: number }[], genders: { name: string; value: number }[] }>('/api/analytics')
    if(isLoading){
        return <LoadingSpinner />
    }
    else if(error){
        return <ErrorMessage message={error} />
    }
    else{
        console.log(data)
        if(!data){
            return <ErrorMessage message='No se encontraron datos' />
        }
    return (
        <div className='w-full'>
        <div className='container mx-auto'>
        <h1 className='text-2xl font-bold'>Analíticas</h1>
        <div className='flex justify-center mt-20 flex-col items-center'>
        <Chart data={data.roles} title='Roles de usuario'/>
        <div className='mt-10' />
        <Chart data={data.genders} title='Generos'/>
        </div>
        </div>
        </div>
    );
    }
}
