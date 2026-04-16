import Image from "next/image";
import { IoArchiveOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import Lower from "../Components/Lower";

const FriendPage = async({ params }) => {


  const { friendId } = await params;

  const res = await fetch("https://assignment-keen-keeper.vercel.app/data.json");
  const data = await res.json();

  const friends = data.friends;

  const expectedFriend = friends.filter((friend) => friend.id == friendId);
  console.log(expectedFriend);

  const {
    name,
    picture,
    status,
    tags,
    bio,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = expectedFriend[0];

  return (
    <div className="max-w-277.5 mx-auto flex flex-col md:flex-row items-center gap-5 mt-20 bg-[#F8FAFC] p-4">
      {/* Left Part */}
      <div className="max-w-87.5">
        {/* Info card */}
        <div className="bg-white">
          <div className="space-y-2 p-6 rounded-lg border border-gray-300 shadow-md cursor-pointer">
            <Image
              className="mx-auto rounded-full"
              width={140}
              height={30}
              src={picture}
              alt={name}
            />
            <h1 className="text-center">{name}</h1>
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
            <div>
              <p className="text-center font-medium text-[#64748B] italic">
                {bio}
              </p>
              <p className="text-center text-[14px] text-[#64748B]">
                Email: {email}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center mt-3">
          <button className="btn bg-white w-full flex items-center justify-center gap-3">
            <RiNotificationSnoozeLine size={20} />
            Snooze 2 weeks
          </button>
          <button className="btn bg-white w-full flex items-center justify-center gap-3">
            <IoArchiveOutline className="" size={20} /> Archive
          </button>
          <button className="btn bg-white w-full flex items-center justify-center gap-3 text-red-600">
            <MdDeleteOutline size={20} />
            Delete
          </button>
        </div>
      </div>
      {/* Right Part */}
      <div>
        {/* up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow-xl border-2 border-gray-300 p-8 flex-1">
            <h1 className="text-center text-3xl text-[#244D3F] font-semibold">
              {days_since_contact}
            </h1>
            <h3 className="text-center text-semibold text-[14px] text-[#64748B]">
              Days Since Contact
            </h3>
          </div>
          <div className="rounded-lg shadow-xl border-2 border-gray-300 p-8 flex-1">
            <h1 className="text-center text-3xl text-[#244D3F] font-semibold">
              {goal}
            </h1>
            <h3 className="text-center text-[#64748B]">Goal (Days)</h3>
          </div>
          <div className="rounded-lg shadow-xl border-2 border-gray-300 p-8 flex-1">
            <h1 className="text-center text-[#244D3F] text-3xl font-semibold">
              {next_due_date}
            </h1>
            <h3 className="text-center text-[#64748B]">Next Due</h3>
          </div>
        </div>
        {/* Middle */}
        <div className="p-6 rounded-lg shadow-xl border-2 border-gray-300 mt-6">
          <div className="flex justify-between items-center">
            <h1 className="text-[#244D3F] font-medium text-[20px]">
              RelationShip Goal
            </h1>
            <button className="btn bg-white">Edit</button>
          </div>
          <p className="text-[#64748B] mt-4">
            Connect every <span className="font-bold text-black">30 days</span>
          </p>
        </div>
        {/* Lower */}
         <Lower expectedFriend={expectedFriend[0]} />
      </div>
    </div>
  );
};

export default FriendPage;
