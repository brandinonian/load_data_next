import FactoryLoadTable from "@/components/factory_table";
import TableControls from "@/components/table_controls";
import TitleBar from "@/components/titlebar";

export default function FactoryLoadsPage() {
    return (
        <div>
            <TitleBar title="Factory Loads"/>
            <TableControls />
            <FactoryLoadTable />
        </div>
    )
}