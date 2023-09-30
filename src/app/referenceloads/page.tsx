import DataTable from "@/components/data_table";
import TableControls from "@/components/table_controls";
import TitleBar from "@/components/titlebar";

export default function ReferenceLoadsPage() {
    return (
        <div>
            <TitleBar title="Reference Loads"/>
            <TableControls />
            <DataTable />
        </div>
    )
}