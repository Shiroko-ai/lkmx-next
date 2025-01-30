import { userService } from '@/services/userService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest){
    try{
    const users = await userService.getUsers(req);
    return NextResponse.json({ 'message': users }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ 'error': 'Un error inesperado ha ocurrido' }, { status: 500 })
    }
}

export async function POST(req: NextRequest){
    const data = await req.json()
    try{
    const result = await userService.createUser(data);
    console.log(result)
    if(result === 'ERROR UNKNOWN'){
        return NextResponse.json({ 'error':'Un error inesperado ha ocurrido' }, { status: 500 })
    }
    if(result === 'ERROR VALIDATION'){
        return NextResponse.json({ 'error':'Datos inválidos' }, { status: 400 })
    }
    if(result === 'ERROR REPEATED'){
        return NextResponse.json({ 'error':'El correo ya existe, elige otro' }, { status: 400 })
    }
    return NextResponse.json({ 'message': 'Usuario creado con éxito' }, { status: 200 })
    }
    catch(error){
        console.log(error)
        return NextResponse.json({ 'error':'Un error inesperado ha ocurrido' }, { status: 500 })
    }
}
