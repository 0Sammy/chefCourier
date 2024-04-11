import Sidebar from "@/components/Sidebar";
import { roboto } from "@/app/fonts";
import '../globals.css';
import { Toaster } from 'sonner';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={roboto.className}>
          <Sidebar />
            <section className="mainWidth">{children}</section>
          <Toaster richColors position="top-center" closeButton />
        </body>  
      </html>
  )
}