export default function FactoryLoadTable() {
    return(
        <div className="overflow-x auto">
            <table className="table bg-slate-700">
                {/**Head */}
                <thead className="bg-slate-600">
                    <tr>
                        <th>Manufacturer</th>
                        <th>Cartridge</th>
                        <th>Bullet</th>
                    </tr>
                </thead>

                {/**Body */}
                <tbody>
                    <tr>
                        <td>Lake City</td>
                        <td>5.56MM NATO</td>
                        <td>55 FMJ</td>
                    </tr>
                    <tr>
                        <td>Lake City</td>
                        <td>5.56MM NATO</td>
                        <td>62 FMJ</td>
                    </tr>
                    <tr>
                        <td>Federal</td>
                        <td>9MM LUGER</td>
                        <td>124 HST</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}