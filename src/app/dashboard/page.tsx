import React from "react";
import ApiCard from "@/components/apicard/page";

export default function Dashboard() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <ApiCard />
        </div>
    );
}