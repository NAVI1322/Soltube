import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Email",
            credentials:{
                username: {label: "email " , type :"text", placeholder: "Email"},
                password: {label: "Password" , type :"password", placeholder: "Password"}
            },
            async authorize(credentials: any)
            {
                return {
                    id: "user 1"
                }
            }
        })
    ],
    secret:"AnubhavSingh" // change this
    
  })


export { handler as GET, handler as POST }