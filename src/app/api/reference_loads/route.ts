import dbConnect from "@/app/lib/dbConnect";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import ref from "@/models/referenceLoad";

export async function GET(req: NextApiRequest) {
    await dbConnect();

    const result = await ref.find();
    return NextResponse.json(result, { status: 200 });
}

export async function POST(req: NextApiRequest) {

    const result = ref.create(req.body);
    return NextResponse.json(result, { status: 200 });

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
}