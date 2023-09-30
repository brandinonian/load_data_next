export default function TitleBar({ title }: { title: string }) {
    return (
        <div className="py-10 bg-slate-500">
            <h1 className="text-3xl text-center">{title}</h1>
        </div>
    )
}