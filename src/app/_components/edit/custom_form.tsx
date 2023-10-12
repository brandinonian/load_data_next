export default function CustomForm() {
    return (
        <form className="p-4 flex flex-col">
            <label>Cartridge:
                <input name="cartridge-input" type="text" className="m-4 bg-slate-600"></input>
            </label>
        </form>
    )
}