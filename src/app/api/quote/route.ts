import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
    const body = await request.json();

    const { fullName, email, adminEmail, phoneNumber, address, country, serialNumber, nearestAirport} = body;

    if ( !fullName || !email || !adminEmail || !phoneNumber || !address || !country || !serialNumber || !nearestAirport ) {

      return new NextResponse("Missing Fields", { status: 400 });

    }

    const newQuote = await prisma.quote.create({
      data: {
        fullName,
        email,
        adminEmail,
        phoneNumber,
        address, 
        country, 
        serialNumber, 
        nearestAirport,
      },
    });

    return NextResponse.json(newQuote)
  }
  