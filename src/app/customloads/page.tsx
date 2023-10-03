import CustomLoadTable from "@/components/custom_table";
import TableControls from "@/components/table_controls";
import TitleBar from "@/components/titlebar";

export default function CustomLoadsPage() {
    return (
        <div>
            <TitleBar title="Custom Loads"/>
            <TableControls />
            <CustomLoadTable />
        </div>
    )
}