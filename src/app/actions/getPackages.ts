import { prisma } from "@/lib/prismadb";

export default async function getPackages(email: string) {
    try {

        const packages = await prisma.package.findMany({
            where: {
                adminEmail: email,
              },

            orderBy: {
                dateCreated: "desc"
            }
        })
        
        return packages
        
    }catch(error: any){
        console.error(error)
        throw error
    }
}