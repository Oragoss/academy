export { default } from "next-auth/middleware";

//This is how the middleware works
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }

//Next.js is explicitly looking for this config
export const config = {
    // *: zero or more params
    // +: one or more
    // ?: zero or one
    matcher: [
        '/admin/:path*',
        '/dashboard/:path*',
        '/resetpassword/:path*'
    ]
}