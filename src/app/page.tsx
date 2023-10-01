import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-slate-800 pt-30">
      <div className="bg-slate-600 py-20 px-40 flex flex-col items-center">
        <Link href="/referenceloads" className="m-5 btn btn-block text-xl">Reference Loads</Link>
        <Link href="/factoryloads" className="m-5 btn btn-block text-xl">Factory Loads</Link>
        <Link href="/customloads" className="m-5 btn btn-block text-xl">Custom Loads</Link>
      </div>
    </div>
  )
}