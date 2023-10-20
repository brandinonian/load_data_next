import { FactoryLoad } from "@prisma/client"

type Props = {
    loads: FactoryLoad[];
}

export default function FactoryLoadTable(data: Props) {
    return(
        <div className="overflow-x auto">
            <table className="table bg-slate-700">
                {/**Head */}
                <thead className="bg-slate-600">
                    <tr className="space-x-10">
                        <th>Manufacturer</th>
                        <th>Cartridge</th>
                        <th>Bullet</th>
                    </tr>
                </thead>

                {/**Body */}
                <tbody>
                    {data.loads.map((load) => (
                        <tr key={load.id}>
                            <td>{load.manufacturer}</td>
                            <td>{load.cartridge}</td>
                            <td>{load.bulletWeight} gr {load.bulletName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}