import { prisma } from "@/lib/prismadb";

export default async function getIndividualUser(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
