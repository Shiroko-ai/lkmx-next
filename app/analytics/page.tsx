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
        <div>
        <h1>Analíticas</h1>
        <div className='flex justify-center mt-20'>
        <Chart data={data.roles} />
        <Chart data={data.genders} />
        </div>
        </div>
    );
    }
}
