import { prisma } from "@/lib/prismadb";

export default async function getAllSerialNumberWithoutEmail() {
  try {
    const allSerialNumbers = await prisma.serialNumber.findMany({
      
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
