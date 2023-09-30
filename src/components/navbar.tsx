export default function Navbar() {

    return (
        <div className="navbar bg-slate-700 flex-1">
            <ul>
                <a href="/" className="btn btn-ghost text-xl">Home</a>
                <a href="/referenceloads" className="btn btn-ghost text-xl">Reference Loads</a>
                <a href="/factoryloads" className="btn btn-ghost text-xl">Factory Loads</a>
                <a href="/customloads" className="btn btn-ghost text-xl">Custom Loads</a>
            </ul>
        </div>
    )

}