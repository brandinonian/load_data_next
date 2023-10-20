import ReferenceLoad from "@/models/reference_load"

export default function CreateReferenceLoad() {

    return (
        <form className="bg-slate-800 shadow-2xl rounded-lg flex flex-col">
            <label className="shadow-lg m-2 p-2">Cartridge:
                <input name="cartridge-input" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Overall Length:
                <input name="manufacturer-input" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Case Manufacturer:
                <input name="case-maunfacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Case Length:
                <input name="case-length" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Bullet Manufacturer:
                <input name="bullet-maunfacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Bullet Name:
                <input name="bullet-name-input" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Bullet Weight:
                <input name="bullet-weight-input" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Primer Manufacturer:
                <input name="primer-manufacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Primer Name:
                <input name="primer-name" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Powder Manufacturer:
                <input name="powder-maunfacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Powder Name:
                <input name="powder-name" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Barrel Length:
                <input name="barrel-length" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Minimum Charge Weight:
                <input name="case-maunfacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Minimum Velocity:
                <input name="case-maunfacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Maximum Charge Weight:
                <input name="case-maunfacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Maximum Velocity:
                <input name="case-maunfacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Source:
                <input name="source" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <input type="submit" value={"Save"} className="btn btn-outline bg-emerald-700 shadow-lg w-1/2 self-center m-4" />
        </form>
    )
}