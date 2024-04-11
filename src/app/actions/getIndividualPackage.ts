import { prisma } from "@/lib/prismadb";

export default async function getIndividualPackage(id: string) {
  try {
    const packageItem = await prisma.package.findUnique({
      where: {
        id: id,
      },include: { 
        statusChanges: true 
      },
    });

    return packageItem;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
