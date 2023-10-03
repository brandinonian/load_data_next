'use client'

import customSchema from "@/models/custom_load"
import CreateNewLoad from "@/components/create_new_load";
import mongoose from "mongoose";

export default function DemoPage() {

    const customModel = mongoose.model("custom load", customSchema);
    

    return (
        <div>
            <CreateNewLoad />
        </div>
    )
}