import { NextResponse } from "next/server";

const LOOGED_IN = false;

export function middleware(request) {
    if(!LOOGED_IN){
       return  NextResponse.redirect(new URL('/login', request.url));
    }
//   console.log("intial-request", {request});
}

export const config = {
  matcher: "/blog/:path*",
};
