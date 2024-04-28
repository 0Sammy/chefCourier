import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {

    const body = await request.json();
    const { adminEmail, adminNotificationEmail, serialNumber} = body;

    if ( !adminEmail || !adminNotificationEmail || !serialNumber) {
      return new NextResponse("Missing Fields", { status: 400 });
    }
    
    try {
       const newSerialNumber = await prisma.serialNumber.create({
       data: {
        adminEmail, 
        adminNotificationEmail,
        serialNumber
        }
    });

    return NextResponse.json(newSerialNumber) 

    } catch (error : any) {
        console.log({error})
        throw new Error (error)
    }
  }
  