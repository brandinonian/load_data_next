import ReferenceLoadTable from "@/components/reference_table";
import TableControls from "@/components/table_controls";
import TitleBar from "@/components/titlebar";

export default function ReferenceLoadsPage() {
    return (
        <div>
            <TitleBar title="Reference Loads"/>
            <TableControls />
            <ReferenceLoadTable />
        </div>
    )
}