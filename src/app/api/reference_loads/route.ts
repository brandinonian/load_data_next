import dbConnect from "@/app/_lib/dbConnect";
import ReferenceLoad from "@/app/_models/referenceLoad";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {

    await dbConnect();

    const result = await ReferenceLoad.find();

    return NextResponse.json(result, { status: 200 });
}

export async function POST(req: Request) {

    await dbConnect();

    const body = await req.json();

    const result = ReferenceLoad.create(body);

    return NextResponse.json(result, { status: 200 });
}
    /*
    const {
        cartridge,
        overallLength,
        caseManufacturer,
        caseLength,
        bulletManufacturer,
        bulletName,
        bulletWeight,
        primerManufacturer,
        primerName,
        powderManufacturer,
        powderName,
        barrelLength,
        minChargeWeight,
        maxChargeWeight,
        minVelocity,
        maxVelocity,
        source,
    } = await req.body;

    await dbConnect();

    const result = ref.create(cartridge,
        overallLength,
        caseManufacturer,
        caseLength,
        bulletManufacturer,
        bulletName,
        bulletWeight,
        primerManufacturer,
        primerName,
        powderManufacturer,
        powderName,
        barrelLength,
        minChargeWeight,
        maxChargeWeight,
        minVelocity,
        maxVelocity,
        source,
    );

    return NextResponse.json(result, { status: 200 });
    */
