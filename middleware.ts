import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // const david = await supabase
  //   .from("tenants")
  //   .select("email")
  //   .eq("email", "bazashvilidavid@gmail.com");

  // console.log(david);

  // if (david && req.nextUrl.pathname === "/login") {
  //   console.log("logged in");
  // }
  const { data: session } = await supabase.auth.getSession();

  // if (!session && req.nextUrl.pathname !== "/login") {
  //   console.log(session);
  //   console.log("redirected");
  //   return NextResponse.redirect("/login");
  // } else {
  //   console.log(session);
  //   console.log(req.nextUrl);
  //   console.log("normal flow");
  // }

  // Check if the session is not available and the path requires authentication
  // if (!session && req.nextUrl.pathname !== "/login") {
  //   const url = new URL(req.url);
  //   url.pathname = "/login";
  //   console.log(session);
  //   return NextResponse.redirect(url);
  // } else {
  //   console.log(session);
  // }

  // Continue with the request/response flow
  return res;
}

export default middleware;
