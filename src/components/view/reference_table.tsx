import { IReferenceLoad } from "@/models/referenceLoad"

type Props = {
    referenceLoads: IReferenceLoad[];
}

export default function ReferenceLoadTable({ referenceLoads }: Props) {

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
                    {referenceLoads.map((load: any) => {
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