'use client'

import React from "react";
import ReferenceForm from "./reference_form";
import FactoryForm from "./factory_form";
import CustomForm from "./custom_form";

export default function CreateNewLoad() {

    const [selection, setSelection] = React.useState("select");

    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelection(event.target.value);
    // };



    return (
        <div className="text-slate-300 bg-gradient-to-tl from-slate-900 to-slate-800 flex flex-col items-center text-center p-8">
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 px-40 p-6 rounded-lg shadow-2xl">
                <p className="text-3xl">Create New Load</p>
            </div>
            <div className="bg-slate-800 text-slate-400 py-10 mt-6 rounded-lg shadow-2xl">
                {/**Select the type of load to load inputs */}
                <label className="m-10">Load Type:
                    <select className="ml-8 select" id="load-type-selector" onChange={
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
                    {(selection === 'reference') && <ReferenceForm />}
                    {(selection === "factory") && <FactoryForm />}
                    {(selection === 'custom') && <CustomForm />}
                </div>
                
            </div>
        </div>
    )
}

/*
{Object.keys(data).map((key, idx) => (
    <div>
        <label>{key} : </label>
        <input type="text"></input>
    </div>
))}
*/