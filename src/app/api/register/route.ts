import  bcrypt  from 'bcrypt';
import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';


export async function POST(request:Request){
    const body = await request.json()
    const {
        notificationEmail,
        email,
        password
    } = body
    
    if(!notificationEmail || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const exist = await prisma.user.findUnique({
        where: {
            email: lowercasedEmail
        }
    });

    if(exist) {
        return new NextResponse('Email already exists', { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: {
            notificationEmail,
            email: lowercasedEmail,
            hashedPassword
        }
    })

    return NextResponse.json(user)
}