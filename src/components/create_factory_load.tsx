export default function CreateFactoryLoad() {

    return (
        <form className="bg-slate-800 shadow-2xl rounded-lg flex flex-col">
            <label className="shadow-lg m-2 p-2">Cartridge:
                <input name="cartridge" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Manufacturer:
                <input name="manufacturer" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Bullet Name:
                <input name="bullet-name" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <label className="shadow-lg m-2 p-2">Bullet Weight:
                <input name="bullet-weight" type="text" className="m-4 text-black bg-slate-400"></input>
            </label>
            <input type="submit" value={"Save"} className="btn btn-outline bg-emerald-700 shadow-lg w-1/2 self-center m-4" />
        </form>
    )
}