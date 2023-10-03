'use client'

import React from "react";
import CreateReferenceLoad from "./create_reference_load";
import CreateFactoryLoad from "./create_factory_load";
import CreateCustomLoad from "./create_custom_load";

export default function CreateNewLoad() {

    const [selection, setSelection] = React.useState("select");

    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelection(event.target.value);
    // };



    return (
        <div className="bg-slate-700 flex flex-col items-center text-center">
            <div className="bg-slate-600 w-full">
                <p className="text-lg">Create New Load</p>
            </div>
            <div>
                {/**Select the type of load to load inputs */}
                <label>Load Type:
                    <select id="load-type-selector" onChange={
                        (e: React.ChangeEvent<HTMLSelectElement>) => setSelection(e.target.value)
                    }>
                        <option value="select">-- select --</option>
                        <option value="reference">Reference Load</option>
                        <option value="factory">Factory Load</option>
                        <option value="custom">Custom Load</option>
                    </select>
                </label>
                {/**Display load inputs */}
                <div>
                    {(selection === 'reference') && <CreateReferenceLoad />}
                    {(selection === "factory") && <CreateFactoryLoad />}
                    {(selection === 'custom') && <CreateCustomLoad />}
                </div>
                <p>Test</p>
            </div>
        </div>
    )
}