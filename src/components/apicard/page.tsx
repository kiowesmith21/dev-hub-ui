import { mockApis } from "@/app/data/mockApis";

/*
id: "user-api",
    name: "User API",
    status: "healthy",
    qualityScore: 94,
    uptime: "99.99%",
    lastDeployed: "2025-06-20",
*/

export default function ApiCard() {
  return (
    <div className="flex flex-wrap gap-4">
      {mockApis.map(api => (
        <div key={api.id} className="border rounded p-4 shadow w-64 bg-white">
          <h2 className="font-bold text-lg">{api.name}</h2>
          <p className={api.status === "Healthy" ? "text-green-500" : "text-red-500"}>{api.status}</p>
          <p className="text-black"><span className="font-bold">Quality Score: </span>{api.qualityScore}</p>
          <p className="text-black"><span className="font-bold">Uptime: </span>{api.uptime}</p>
          <p className="text-black"><span className="font-bold">Last Deployed: </span>{api.lastDeployed}</p>
        </div>
      ))}
    </div>
  );
}