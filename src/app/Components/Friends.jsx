'use client'

import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";

const Friends = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('/data.json')
     .then(res => res.json())
     .then(data => setFriends(data.friends))
  })
  
  // const res =  fetch("/data.json");
  // const data = res.json();
  // const friends = data.friends;

  return (
    <div className="max-w-277.5 mx-auto p-4">
        <h1 className="font-semibold text-2xl text-[#1F2937]">Your Friends</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
