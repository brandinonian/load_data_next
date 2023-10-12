export default function FactoryForm() {
    return (
        <div className="p-4 flex flex-col">
            <label>Cartridge:
                <input name="cartridge-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
            <label>Manufacturer:
                <input name="manufacturer-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
            <label>Bullet Name:
                <input name="bullet-name-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
            <label>Bullet Weight:
                <input name="bullet-weight-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
        </div>
    )
}