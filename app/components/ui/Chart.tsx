import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface ChartProps {
    data: { name: string; value: number }[]
    title: string
    }

export default function Chart({ data, title }: ChartProps) {
            return (
            <>
            <h1 className='text text-slate-500'>{title}</h1>
            <ResponsiveContainer width="50%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                </>
                )
}
