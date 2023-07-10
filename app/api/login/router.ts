import { auth } from "firebase-admin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const session = cookies().get("session")?.value || "";
  
    //Validate if the cookie exist in the request
    if (!session) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    //Use Firebase Admin to validate the session cookie
    const decodedClaims = await auth().verifySessionCookie(session, true);
  
    if (!decodedClaims) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    return NextResponse.json({ isLogged: true }, { status: 200 });
  }