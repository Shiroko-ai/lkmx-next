import { NextResponse } from 'next/server';

export function GET(){
    return NextResponse.json({ message: 'Everything seems fine!' }, { status: 200 })
}
