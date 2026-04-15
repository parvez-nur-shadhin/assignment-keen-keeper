'use client'

import { useContext } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk, MdOutlineTextsms } from "react-icons/md";
import { Context } from "./Context/ContextProvider";

const Lower = ({expectedFriend}) => {

    const {handleCall, handleText, handleVideo} = useContext(Context);


  return (
    <div>
      <div className="rounded-lg shadow-xl border-2 border-gray-300 p-6 mt-6">
        <h1 className="text-[#244D3F] font-medium text-2xl">Quick Check-In</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <button onClick={() => handleCall(expectedFriend)} className="btn flex flex-col h-full bg-[#E9E9E9] rounded-lg flex-1 shadow-xl p-8 cursor-pointer">
            <MdOutlinePhoneInTalk className="mx-auto" size={30} />
            <h3 className="text-center text-semibold text-[14px] text-[#64748B]">
              Days Since Contact
            </h3>
          </button>
          <button onClick={() => handleText(expectedFriend)} className="btn flex flex-col h-full bg-[#E9E9E9] rounded-lg flex-1 shadow-xl p-8 cursor-pointer">
            <MdOutlineTextsms className="mx-auto" size={30} />
            <h3 className="text-center text-[#64748B]">Text</h3>
          </button>
          <button onClick={() => handleVideo(expectedFriend)} className="btn flex flex-col h-full bg-[#E9E9E9] rounded-lg flex-1 shadow-xl p-8 cursor-pointer">
            <IoVideocamOutline className="mx-auto" size={30} />
            <h3 className="text-center text-[#64748B]">Video</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lower;
