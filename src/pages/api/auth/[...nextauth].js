
import NextAuth from "next-auth";
import Provider from "next-auth/providers";

export const authOptions = {
    //
    providers: [
        Provider.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        
        }),
    ],
};

export default NextAuth(authOptions)