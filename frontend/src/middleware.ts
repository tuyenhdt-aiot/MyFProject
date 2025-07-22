import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const access_token = request.cookies.get('access_token')?.value;
    if (!access_token){
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }   
    return NextResponse.next();

}
export const config ={
    matcher:['/dashboard/tasks/:path*','/dashboard/user/:path*']
}