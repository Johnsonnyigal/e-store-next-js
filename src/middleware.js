import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/signin", request.url));
}

export const config = {
  matcher: ["/", "/cart", "/admin", "/admin/products", "/admin/products/add"],
};
