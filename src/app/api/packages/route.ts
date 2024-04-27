import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    trackingNumber,
    originPort,
    destinationPort,
    transportationMode,
    pieces,
    length,
    weight,
    width,
    height,
    adminEmail,
    statusChanges,
    estimatedDeliveryDate,
    dateCreated,
  } = body;

  if(!trackingNumber || !originPort || !destinationPort || !transportationMode || !pieces || !length || !weight || !width || !height || !estimatedDeliveryDate || !dateCreated ) {
    return new NextResponse('Missing Fields', { status: 400 })
}


  const newPackage = await prisma.package.create({
    data: {
      trackingNumber,
      originPort,
      destinationPort,
      transportationMode,
      pieces,
      length,
      weight,
      width,
      height,
      adminEmail,
      statusChanges,
      estimatedDeliveryDate,
      dateCreated,
    },
  });

  return NextResponse.json(newPackage)
  
}
