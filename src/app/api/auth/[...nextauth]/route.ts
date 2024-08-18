import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Email",
            credentials:{
                email: {label: "email " , type :"text", placeholder: "Email"},
                password: {label: "Password" , type :"password", placeholder: "Password"}
            },
            async authorize(credentials: any)
            {
                const hashedPassword = await bcrypt.hash(credentials.password, 10); // hashing Password 
                const existingUser = await prisma.user.findFirst({
                    where:{
                        email:credentials.username
                    }
                })

                if(existingUser)
                {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                if (passwordValidation) {
                    return {
                        id: existingUser.UserId.toString(),
                        email: existingUser.email.toString(),
                    }
                }   
                return null;
                }

            try {
                const user = await prisma.user.create({
                    data: {
                        email: credentials.email,
                        password: hashedPassword
                    }
                });
            
                return {
                    id: user.UserId.toString(),
                    email: user.email,
                }
            } catch(e) {
                console.error(e);
            }

            return null;
                

                
            }
        })
    ],
    secret:"AnubhavSingh" // change this

  })


export { handler as GET, handler as POST }