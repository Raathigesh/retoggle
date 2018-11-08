import React from "react";
const {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} = require("recharts");

export default function Chart({ data }) {
  console.log("data", data);
  return (
    <div>
      <LineChart width={250} height={250} data={data} margin={{ left: -30 }}>
        <XAxis dataKey="x" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
