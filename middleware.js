import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

// Explicitly protect only certain routes
export default clerkMiddleware((auth, req) => {
  const url = req.nextUrl;
  
  // Protect everything under /dashboard except /dashboard/how
  if (url.pathname.startsWith('/dashboard') && url.pathname !== '/dashboard/how') {
    auth().protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
