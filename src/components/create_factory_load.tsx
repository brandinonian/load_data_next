export default function CreateFactoryLoad() {
    return (
        <div className="p-4 flex flex-col">
            <label>Cartridge:
                <input id="cartridge-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
            <label>Manufacturer:
                <input id="manufacturer-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
            <label>Bullet Name:
                <input id="bullet-name-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
            <label>Bullet Weight:
                <input id="bullet-weight-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
        </div>
    )
}