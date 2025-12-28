import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  // 1. Create an unmodified response object
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // This dance is still required to sync cookies between request/response
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 2. CRITICAL CHANGE: Use getUser() instead of getSession()
  // getSession() just checks the cookie. getUser() verifies the token with Supabase.
  // This prevents spoofed cookies from accessing admin areas.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const url = request.nextUrl.clone();

  // 3. Protected Routes Logic
  // If user accesses /admin without a verified user object -> Redirect to login
  if (url.pathname.startsWith("/admin") && !user) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 4. Public Routes Logic
  // If user is logged in but tries to hit /login -> Redirect to admin
  if (url.pathname === "/login" && user) {
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return response;
}

// The matcher configuration remains the same in Next.js 16
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images, svgs, etc.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
