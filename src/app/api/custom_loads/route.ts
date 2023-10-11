import dbConnect from "@/app/_lib/dbConnect";
import CustomLoad from "@/app/_models/customLoad";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    await dbConnect();

    const result = await CustomLoad.find();
    return NextResponse.json(result, { status: 200 });
}