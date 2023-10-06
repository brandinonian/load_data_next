import Link from "next/link";

export default function Navbar() {

    return (
        <div className="navbar bg-slate-700 flex-1">
            <ul>
                <Link href="/" className="btn btn-ghost text-xl">Home</Link>
                <Link href="/demo" className="btn btn-ghost text-xl">Demo</Link>
            </ul>
        </div>
    )

}