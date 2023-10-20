import { useState } from "react";
import prisma from "../lib/prisma";
import FactoryLoadTable from "@/_components/view/factory_table";

async function getFactoryLoads() {
    const loads = await prisma.factoryLoad.findMany();
    return loads;
}

async function getReferenceLoads() {
    const loads = await prisma.referenceLoad.findMany();
    return loads;
}

async function getCustomLoads() {
    const loads = await prisma.customLoad.findMany();
    return loads;
}

export default async function DemoPage() {

    const loads = await getFactoryLoads();

    return (
        <div>
            <FactoryLoadTable loads={loads} />
        </div>
    )
}