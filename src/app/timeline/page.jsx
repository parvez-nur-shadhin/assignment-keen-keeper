"use client";

import { useContext, useEffect, useState } from "react";
import { Context } from "../Components/Context/ContextProvider";
import Image from "next/image";

const TimeLinePage = () => {

  const [isAll, setIsAll] = useState(true);
  const [isText , setIsText] = useState(true);
  const [isCall , setIsCall] = useState(true);
  const [isVideo , setIsVideo] = useState(true);

  const handleCall = () => {
      setIsCall(true);
      setIsText(false);
      setIsVideo(false);
      setIsAll(false);
  }
  const handleText = () => {
      setIsCall(false);
      setIsText(true);
      setIsVideo(false);
      setIsAll(false);
  }
  const handleVideo = () => {
      setIsCall(false);
      setIsText(false);
      setIsVideo(true);
      setIsAll(false);
  }
  const handleAll = () => {
      setIsCall(true);
      setIsText(true);
      setIsVideo(true);
      setIsAll(true);
  }


  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    setDate(formattedDate);
  }, []);

  const { call, text, video } = useContext(Context);

  return (
    <div className="max-w-277.5 w-full mx-auto mt-20 bg-[#F8FAFC] p-4">
      <h1 className="text-[#1F2937] font-bold text-5xl">Timeline</h1>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="shadow-md mt-6 border border-gray-200 p-4 rounded-md text-[#64748B] text-[18px] cursor-pointer m-1"
        >
          Filter Timeline
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <button onClick={handleAll}>All</button>
          </li>
          <li>
            <button onClick={handleText}>Text</button>
          </li>
          <li>
            <button onClick={handleCall}>Call</button>
          </li>
          <li>
            <button onClick={handleVideo}>Video</button>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        {call.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex gap-3 items-center justify-start bg-white rounded-lg p-4 mt-5 ${isCall ? "" : "hidden"}`}
            >
              <div>
                <Image width={30} height={30} src={"/call.png"} alt="Call" />
              </div>
              <div>
                <h1 className="text-[#64748B] flex gap-1 items-center justify-start">
                  <span className="font-medium text-[20px] text-[#244D3F]">
                    Call
                  </span>{" "}
                  With {item.name}
                </h1>
                <p className="font-medium text-[#64748B]">{date}</p>
              </div>
            </div>
          );
        })}
        {text.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex gap-3 items-center justify-start bg-white rounded-lg p-4 mt-5 ${isText ? "" : "hidden"}`}
            >
              <div>
                <Image width={30} height={30} src={"/text.png"} alt="Text" />
              </div>
              <div>
                <h1 className="text-[#64748B] flex gap-1 items-center justify-start">
                  <span className="font-medium text-[20px] text-[#244D3F]">
                    Text
                  </span>{" "}
                  With {item.name}
                </h1>
                <p className="font-medium text-[#64748B]">{date}</p>
              </div>
            </div>
          );
        })}
        {video.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex gap-3 items-center justify-start bg-white rounded-lg p-4 mt-5 ${isVideo ? "" : "hidden"}`}
            >
              <div>
                <Image width={30} height={30} src={"/video.png"} alt="Video" />
              </div>
              <div>
                <h1 className="text-[#64748B] flex gap-1 items-center justify-start">
                  <span className="font-medium text-[20px] text-[#244D3F]">
                    Video
                  </span>{" "}
                  With {item.name}
                </h1>
                <p className="font-medium text-[#64748B]">{date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLinePage;
