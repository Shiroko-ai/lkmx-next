import { Errors } from '@/constants/enums'
import { userService } from '@/services/userService'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params }: any){
    const { id } = await params
    const result = await userService.getUser(id)
    if(result === Errors.ERROR_NO_DATA || result === Errors.INVALID_ID_FORMAT){
        return NextResponse.json({ error: 'Usuario no encontrado o no proporcionado' }, { status: 404 })
    }
    else if(result === Errors.ERROR_UNKNOWN){
        return NextResponse.json({ error: 'Error en la base de datos' }, { status: 500 })
    }
    return NextResponse.json({ message: result }, { status: 200 })
}


export async function PUT(req: NextRequest, { params }: any){
    const { id } = await params
    const data = await req.json()
    const result = await userService.updateUser(id, data)
    console.log(result)
    if(result === Errors.ERROR_VALIDATION){
        return NextResponse.json({ error: 'Datos no validos' }, { status: 400 })
    }
    else if(result === Errors.ERROR_NO_DATA || result === Errors.INVALID_ID_FORMAT){
        return NextResponse.json({ error: 'Usuario no encontrado o no proporcionado' }, { status: 404 })
    }
    else if(result === Errors.ERROR_REPEATED){
        return NextResponse.json({ error: 'El correo ya existe' }, { status: 400 })
    }
    else if(result === Errors.ERROR_UNKNOWN){
        return NextResponse.json({ error: 'Error en la base de datos' }, { status: 500 })
    }
    return NextResponse.json({ message: 'Se actualizó el usuario con éxito' }, { status: 200 })
}
