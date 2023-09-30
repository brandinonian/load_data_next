import DataTable from "@/components/data_table";
import TableControls from "@/components/table_controls";
import TitleBar from "@/components/titlebar";

export default function FactoryLoadsPage() {
    return (
        <div>
            <TitleBar title="Factory Loads"/>
            <TableControls />
            <DataTable />
        </div>
    )
}