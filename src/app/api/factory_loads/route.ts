import dbConnect from "@/app/lib/dbConnect";
import fac from "@/models/factoryLoad";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {

    await dbConnect();

    const result = await fac.find({});
    return NextResponse.json(result, {status: 200});
}