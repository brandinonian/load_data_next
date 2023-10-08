export default function CustomLoadTable() {
    return(
        <div className="overflow-x auto">
            <table className="table bg-slate-700">
                {/**Head */}
                <thead className="bg-slate-600">
                    <tr>
                        <th>Cartridge</th>
                        <th>Bullet</th>
                        <th>Case</th>
                        <th>Powder</th>
                        <th>Primer</th>
                    </tr>
                </thead>

                {/**Body */}
                <tbody>
                    <tr>
                        <td>5.56MM NATO</td>
                        <td>Hornady 55 FMJ</td>
                        <td>Lake City</td>
                        <td>Accurate 2520</td>
                        <td>CCI 450</td>
                    </tr>
                    <tr>
                        <td>5.56MM NATO</td>
                        <td>Sierra 77 TMK</td>
                        <td>Lake City</td>
                        <td>Accurate 2520</td>
                        <td>CCI 450</td>
                    </tr>
                    <tr>
                        <td>5.56MM NATO</td>
                        <td>Hornady 62 FMJ</td>
                        <td>Lake City</td>
                        <td>Accurate 2520</td>
                        <td>CCI 450</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}