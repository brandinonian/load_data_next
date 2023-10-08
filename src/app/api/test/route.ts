import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    return NextResponse.json("Test successful", {status: 200});
}