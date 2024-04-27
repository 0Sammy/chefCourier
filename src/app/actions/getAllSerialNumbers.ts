import { prisma } from "@/lib/prismadb";

export default async function getAllSerialNumber(email: string) {
  try {
    const allSerialNumbers = await prisma.serialNumber.findMany({
      where: {
        adminEmail: email,
      },
      
      orderBy: {
        createdAt: "desc"
    }
    });

    return allSerialNumbers;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
