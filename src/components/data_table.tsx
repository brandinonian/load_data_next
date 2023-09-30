export default function DataTable() {
    return(
        <div className="overflow-x auto">
            <table className="table bg-slate-700">
                {/**Head */}
                <thead className="bg-slate-600">
                    <tr>
                        <th>Cartridge</th>
                        <th>Bullet</th>
                        <th>Powder</th>
                    </tr>
                </thead>

                {/**Body */}
                {/**Dummy Data */}
                <tbody>
                    {/**5.56 55FMJ */}
                    <tr>
                        <td>5.56 MM</td>
                        <td>Hornady 55 gr FMJ</td>
                        <td>Accurate 2520</td>
                    </tr>
                    {/**9MM 115 FMJ */}
                    <tr>
                        <td>9MM</td>
                        <td>Hornady 115 gr FMJ</td>
                        <td>Hodgdon CFE Pistol</td>
                    </tr>
                    {/**45 ACP 230 FMJ */}
                    <tr>
                        <td>45 ACP</td>
                        <td>Speer 230 gr TMJ</td>
                        <td>Hodgdon Titegroup</td>
                    </tr>
                    {/**6MM ARC 108 ELD */}
                    <tr>
                        <td>6MM ARC</td>
                        <td>Hornady 108 gr ELD-M</td>
                        <td>Hodgdon CFE 223</td>
                    </tr>
                    {/**45-70 325 FTX */}
                    <tr>
                        <td>45-70 Govt</td>
                        <td>Hornady 325 FTX</td>
                        <td>Hodgdon H335</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}