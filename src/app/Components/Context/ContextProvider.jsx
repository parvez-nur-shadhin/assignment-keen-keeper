"use client";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (expectedFriend) => {
    setCall([...call, expectedFriend]);
    toast.success(`Call with ${expectedFriend.name}`, {
      position: "top-center",
    });
  };
  const handleText = (expectedFriend) => {
    setText([...text, expectedFriend]);
    toast.success(`Text with ${expectedFriend.name}`, {
      position: "top-center",
    });
  };
  const handleVideo = (expectedFriend) => {
    setVideo([...video, expectedFriend]);
    toast.success(`Video with ${expectedFriend.name}`, {
      position: "top-center",
    });
  };
  const data = {
    call,
    setCall,
    text,
    setText,
    video,
    setVideo,
    handleCall,
    handleText,
    handleVideo,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
