import dbConnect from "@/app/_lib/dbConnect";
import FactoryLoad from "@/app/_models/factoryLoad";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {

    await dbConnect();

    const result = await FactoryLoad.find({});
    return NextResponse.json(result, {status: 200});
}