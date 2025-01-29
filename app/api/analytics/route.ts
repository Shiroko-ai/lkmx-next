import { userService } from '@/services/userService';
import { NextResponse } from 'next/server';

export async function GET(){
    try{
    const analytics = await userService.getAnalytics()
    return NextResponse.json({ analytics }, { status: 200 })
    }catch(e){
        console.log(e)
        return NextResponse.json({ 'error' : 'Un error inesperado ocurrió' }, { status: 500 })
}
}
