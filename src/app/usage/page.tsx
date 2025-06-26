import React from "react";
import { mockApis } from "../data/mockApis";
import UsageChart from "@/components/usagechart/page";

export default function Usage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Usage</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {mockApis.map((api) => (
                    <div key={api.id}>
                        <h2 className="text-xl font-bold mb-2">{api.name}</h2>
                        {api.usage && <UsageChart usageData={api.usage} />}
                    </div>
                ))}
            </div>
        </div>
    );
}