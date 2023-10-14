import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: session } = await supabase.auth.getSession();

  if (session.session) {
    return res;
  }

  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/sign-in";
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  // list all the pages you want protected here
  matcher: ["/menu", "/home", "/history"],
};
