import { userService } from '@/services/userService'
import { NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: NextRequest, { params }: any){
    const { id } = await params
    const result = await userService.getUser(id)
    console.log(result)
    if(result === 'ERROR_NO_DATA' || result === 'INVALID_ID_FORMAT'){
        return NextResponse.json({ error: 'Usuario no encontrado o no proporcionado' }, { status: 404 })
    }
    else if(result === 'INTERNAL_SERVER_ERROR'){
        return NextResponse.json({ error: 'Error en la base de datos' }, { status: 500 })
    }
    return NextResponse.json({ message: result }, { status: 200 })
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PUT(req: NextRequest, { params }: any){
    const { id } = await params
    const data = await req.json()
    const result = await userService.updateUser(id, data)
    console.log(result)
    if(result === 'ERROR VALIDATION'){
        return NextResponse.json({ error: 'Datos no validos' }, { status: 400 })
    }
    else if(result === 'ERROR_NO_DATA' || result === 'INVALID_ID_FORMAT'){
        return NextResponse.json({ error: 'Usuario no encontrado o no proporcionado' }, { status: 404 })
    }
    return NextResponse.json({ message: result }, { status: 200 })
}
