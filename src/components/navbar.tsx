import Link from "next/link";

export default function Navbar() {

    return (
        <div className="navbar bg-slate-700 flex-1">
            <ul>
                <Link href="/" className="btn btn-ghost text-xl">Home</Link>
                <Link href="/referenceloads" className="btn btn-ghost text-xl">Reference Loads</Link>
                <Link href="/factoryloads" className="btn btn-ghost text-xl">Factory Loads</Link>
                <Link href="/customloads" className="btn btn-ghost text-xl">Custom Loads</Link>
            </ul>
        </div>
    )

}