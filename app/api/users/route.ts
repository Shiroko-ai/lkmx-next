import { Errors } from '@/constants/enums';
import { userService } from '@/services/userService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest){
    try{
    const result = await userService.getUsers(req);
    if(result === Errors.ERROR_UNKNOWN){
        return NextResponse.json({ 'error':'Un error inesperado ha ocurrido' }, { status: 500 })
    }
    return NextResponse.json({ message: result }, { status: 200 })
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
    if(result === Errors.ERROR_UNKNOWN){
        return NextResponse.json({ 'error':'Un error inesperado ha ocurrido' }, { status: 500 })
    }
    if(result === Errors.ERROR_VALIDATION){
        return NextResponse.json({ 'error':'Datos inválidos' }, { status: 400 })
    }
    if(result === Errors.ERROR_REPEATED){
        return NextResponse.json({ 'error':'El correo ya existe, elige otro' }, { status: 400 })
    }
    return NextResponse.json({ 'message': 'Usuario creado con éxito' }, { status: 200 })
    }
    catch(error){
        console.log(error)
        return NextResponse.json({ 'error':'Un error inesperado ha ocurrido' }, { status: 500 })
    }
}
