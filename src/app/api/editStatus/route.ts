import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {id, status, location, timestamp,} = body
    

    if (!id || !status || !location || !timestamp){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const updateStatus = await prisma.packageStatusChange.update({
        where: {
            id,
        },
        data: {
            status,
            location,
            timestamp,
        },
    });

    return NextResponse.json(updateStatus);

    }catch(error: any){
        console.log(error.message)
        return new NextResponse(error.message)
    }
    
}

