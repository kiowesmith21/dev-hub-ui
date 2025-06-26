"use client";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type UsageChartProps = {
  usageData: { date: string; requests: number }[];
};

const UsageChart = ({ usageData }: UsageChartProps) => {
  return (
    <div className="w-full h-64 p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        API Usage
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={usageData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="requests"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageChart;
