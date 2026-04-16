import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  const { id, name, picture, tags, status, days_since_contact } = friend;
  return (
    <Link href={`/${id}`}>
      <div className="space-y-2 p-6 rounded-lg border border-gray-300 shadow-md cursor-pointer">
        <Image
          className="mx-auto rounded-full"
          width={140}
          height={30}
          src={picture}
          alt={name}
        />
        <h1 className="text-center">{name}</h1>
        <p className="text-[16px] text-[#64748B] text-center my-2">{days_since_contact}d ago</p>
        <div className="flex items-center justify-center gap-5">
          {tags.map((tag, index) => {
            return (
              <div key={index} className=" bg-[#CBFADB] p-2 rounded-full">
                <h1 className="font-medium text-[12px] text-[#244D3F]">
                  {tag}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <p
            className={`inline-block text-center p-2 text-white rounded-full text-[12px] ${status === "overdue" ? "bg-[#EF4444]" : ""} ${status === "almost due" ? "bg-[#EFAD44]" : ""} ${status === "on-track" ? "bg-[#244D3F]" : ""}`}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
