import { prisma } from "@/lib/prismadb";

export default async function getAllQuote(email: string) {
  try {
    const allQuote = await prisma.quote.findMany({

      where: {
        adminEmail: email
      },

      orderBy: {
        createdAt: "desc"
    }
    });

    return allQuote;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
