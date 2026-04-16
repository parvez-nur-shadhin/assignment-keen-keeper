"use client";

import { useContext } from "react";
import { Pie, PieChart } from "recharts";
import { Context } from "../Components/Context/ContextProvider";
import { RechartsDevtools } from "@recharts/devtools";
import { Cell } from "recharts";
import { GoDotFill } from "react-icons/go";

const StatsChart = ({ isAnimationActive = true }) => {
  const { call, text, video } = useContext(Context);

  const totalCall = call.length;
  const totalText = text.length;
  const totalVideo = video.length;

  const data = [
    { name: "Call", value: totalCall },
    { name: "Text", value: totalText },
    { name: "Video", value: totalVideo },
  ];
  const COLORS = ["#244d3f", "#7f37f5", "#22C55E"];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-277.5 mx-auto">
        <h1 className="text-[#1F2937] text-5xl font-bold mt-5">
          Friendship Analytics
        </h1>
        <div className="p-8 rounded-xl bg-white mt-5 mb-7">
          <h1 className="font-medium text-2xl text-[#244D3F]">
            By Interaction Type
          </h1>
          <PieChart
            className="mx-auto mt-5"
            style={{
              width: "100%",
              maxWidth: "300px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={isAnimationActive}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <RechartsDevtools />
          </PieChart>

          <div className="flex items-center justify-center gap-3 mt-10">
            <h1 className="flex items-center gap-1 font-semibold"><span><GoDotFill className="text-[#244d3f]" /></span> Call</h1>
            <h1 className="flex items-center gap-1 font-semibold"><span><GoDotFill className="text-[#7f37f5]" /></span> Text</h1>
            <h1 className="flex items-center gap-1 font-semibold"><span><GoDotFill className="text-[#22C55E]" /></span> Video</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsChart;
