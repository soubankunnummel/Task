import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export const middelware = (req) => {
  const protectRout = ["/"];
  const cookestore = cookies();
  const token = cookestore.get("token");
  const url = URL(req.nextUrl);
  if (!token && protectRout.includes(req.nextUrl.pathname)) {
    const absUrl = new URL("/Login", req.nextUrl.origin);
    return NextResponse.redirect(absUrl.toString())
  }
  if (token && url.pathname.includes("/Login")) {
    const absoluteUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  return NextResponse.next();
};
