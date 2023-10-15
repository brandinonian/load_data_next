'use client'

import { IReferenceLoad } from "@/app/_models/referenceLoad"
import GetReferenceLoads from "@/app/utils/getReferenceLoads";


export default async function ReferenceLoadTable() {

    const loads: IReferenceLoad[] = await GetReferenceLoads();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Cartridge</th>
                        <th>Bullet</th>
                        <th>Case</th>
                        <th>Powder</th>
                        <th>Primer</th>
                    </tr>
                </thead>
                <tbody>
                    {loads.map((load: IReferenceLoad) => {
                        return (
                            <tr>
                                <td>{load.cartridge}</td>
                                <td>{`${load.bulletManufacturer} ${load.bulletWeight} gr ${load.bulletName}`}</td>
                                <td>{load.caseManufacturer}</td>
                                <td>{`${load.powderManufacturer} ${load.powderName}`}</td>
                                <td>{`${load.primerManufacturer} ${load.primerName}`}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}