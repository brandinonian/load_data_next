import ReferenceLoadTable from "@/app/_components/view/reference_table"

/*
type Props = {
    data: IReferenceLoad[];
}
*/

export default function DemoPage() {

    return (
        <div>
            <ReferenceLoadTable />
        </div>
    )
}

/*
export async function getStaticProps() {

    const client = await clientPromise;
    const db = client.db("loaddata");

    const result = db.collection("referenceloads").find().toArray();

    return result;
}
*/