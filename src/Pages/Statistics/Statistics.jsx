

import "./styles.css";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function App() {
  const [donates, setDonates] = useState([]);

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donate"));
    if (donateItems) {
      setDonates(donateItems);
    } else {
      console.log("No data found");
    }
  }, []);

  const yourDonation = (donates.length / 12) * 100;
  const TotalDonation = 100 - yourDonation;

  const data = [
    { name: "Total Donation", value: TotalDonation },
    { name: "Your Donation", value: yourDonation },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="chart-container flex flex-col justify-center items-center  mx-auto">
      <div className="responsive-chart max-w-7xl">
        <PieChart width={200} height={200} className="pie-chart">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="text-center  flex flex-row justify-center gap-5">
        <div>
          <p className="text-lg font-normal">Total Donation</p>
          <span
            style={{
              backgroundColor: "#FF444A",
              width: "100px",
              height: "12px",
              display: "inline-block",
            }}
          ></span>
        </div>
        <div>
          <p className="text-lg font-normal">Your Donation</p>
          <span
            style={{
              backgroundColor: "#00C49F",
              width: "100px",
              height: "12px",
              display: "inline-block",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}
