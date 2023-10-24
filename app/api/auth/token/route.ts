import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

//In a real application you probably don't need to do this.
//I'm only doing this as a reference

export async function GET(request: NextRequest) {
    const token = await getToken({ req: request});
    return NextResponse.json({ token });
}