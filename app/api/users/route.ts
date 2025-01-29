import { userService } from '@/services/userService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest){
    try{
    const result = await userService.getUsers(req);
    return NextResponse.json({ result }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ 'error': 'Un error inesperado ha ocurrido' }, { status: 500 })
    }
}

export async function POST(req: NextRequest){
    const data = await req.json()
    try{
    const result = await userService.createUser(data);
    return NextResponse.json({ result }, { status: 200 })
    }
    catch(error){
        console.log(error)
        return NextResponse.json({ 'error':'Un error inesperado ha ocurrido' }, { status: 500 })
    }
}
