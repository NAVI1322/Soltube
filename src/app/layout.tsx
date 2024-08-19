import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NavBar } from "@/components/NavBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOLTUBE:Block with subs",
  description: "When Youtube meets Blockchain Trade your favourite channel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <Providers>
      <html lang="en">
     
      <body className={inter.className } >
      <ThemeProvider 
       attribute="class"
       defaultTheme="system"
       enableSystem
       disableTransitionOnChange>
        
        {children}
        </ThemeProvider>
        </body>
    
    
    </html>
    </Providers>
      
   
    );
    
}
