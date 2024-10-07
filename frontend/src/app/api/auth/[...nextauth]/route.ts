import NextAuth from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import type { NextAuthOptions } from 'next-auth';

const handler = NextAuth(authOptions as NextAuthOptions);

export { handler as GET, handler as POST };
