"use client";

import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (expectedFriend) => {
    setCall([...call, expectedFriend]);
  }
  const handleText = (expectedFriend) => {
    setText([...text, expectedFriend]);
  }
  const handleVideo = (expectedFriend) => {
    setVideo([video, expectedFriend])
  }
  const data = {
    call,
    setCall,
    text,
    setText,
    video,
    setVideo,
    handleCall,
    handleText,
    handleVideo
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
