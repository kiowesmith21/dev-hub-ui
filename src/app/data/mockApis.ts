// mockApis.ts
export const mockApis = [
  {
    id: "user-api",
    name: "User API",
    status: "Healthy",
    qualityScore: 94,
    uptime: "99.99%",
    lastDeployed: "2025-06-20",
    usage: [
      { date: "Jun 01", requests: 120 },
      { date: "Jun 02", requests: 200 },
      { date: "Jun 03", requests: 150 },
      { date: "Jun 04", requests: 300 },
      { date: "Jun 05", requests: 220 },
    ],
  },
  {
    id: "super-api",
    name: "Super API",
    status: "Unhealthy",
    qualityScore: 60,
    uptime: "69.69%",
    lastDeployed: "2025-06-15",
    usage: [
      { date: "Jun 01", requests: 400 },
      { date: "Jun 02", requests: 380 },
      { date: "Jun 03", requests: 320 },
      { date: "Jun 04", requests: 250 },
      { date: "Jun 05", requests: 190 },
    ],
  },
  {
    id: "fun-api",
    name: "Fun API",
    status: "Healthy",
    qualityScore: 89,
    uptime: "98.99%",
    lastDeployed: "2025-06-25",
    usage: [
      { date: "Jun 10", requests: 370 },
      { date: "Jun 11", requests: 380 },
      { date: "Jun 12", requests: 250 },
      { date: "Jun 13", requests: 390 },
      { date: "Jun 14", requests: 150 },
    ],
  },
  {
    id: "Alright-api",
    name: "Alright API",
    status: "Unhealthy",
    qualityScore: 89,
    uptime: "78.23%",
    lastDeployed: "2025-06-26",
    usage: [
      { date: "Jun 20", requests: 180 },
      { date: "Jun 25", requests: 240 },
      { date: "Jun 26", requests: 330 },
      { date: "Jun 27", requests: 120 },
      { date: "Jun 28", requests: 210 },
    ],
  },
];

