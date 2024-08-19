import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "../../../prisma";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        FirstName: { label: "FirstName", type: "text", placeholder: "FirstName" },
        LastName: { label: "LastName", type: "text", placeholder: "LastName" },
        UserName: { label: "UserName", type: "text", placeholder: "UserName" },
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials: any) {
        try {
          // Look for existing user
          const existingUser = await prisma.user.findFirst({
            where: {
              email: credentials.email,
              FirstName: credentials.FirstName,
              LastName: credentials.LastName,
              UserName: credentials.UserName,
            },
          });

          if (existingUser) {
            const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
            if (passwordValidation) {
              return {
                id: existingUser.UserId.toString(),
                email: existingUser.email,
                name: `${existingUser.FirstName} ${existingUser.LastName}`,
                userName: existingUser.UserName,
              };
            } else {
              throw new Error("Invalid credentials");
            }
          } else {
            // Create a new user if not found
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const user = await prisma.user.create({
              data: {
                FirstName: credentials.FirstName,
                LastName: credentials.LastName,
                UserName: credentials.UserName,
                email: credentials.email,
                password: hashedPassword,
              },
            });

            return {
              id: user.UserId.toString(),
              email: user.email,
              name: `${user.FirstName} ${user.LastName}`,
              userName: user.UserName,
            };
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  secret: "AnubhavSingh", // Consider storing this in environment variables
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
    async redirect({ url, baseUrl}:any) {
      if (url.startsWith(baseUrl)) {
        return "/dashboard";
      } else if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      return baseUrl;
    },
  },
};
