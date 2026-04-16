'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiHomeLine, RiTimeLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";


const Navbar = () => {

  const [home, setHome] = useState(true);
  const [timeline, setTimeline] = useState(false);
  const [stats, setStats] = useState(false);

  const handleHome = () => {
    setHome(true);
    setTimeline(false);
    setStats(false);
  }
  const handleTimeline = () => {
    setHome(false);
    setTimeline(true);
    setStats(false);
  }
  const handleStats = () => {
    setHome(false);
    setTimeline(false);
    setStats(true);
  }

  const links = (
    <>
      <li className={`${home ? "bg-[#244D3F] text-white rounded-md": ""}`}>
        <Link onClick={handleHome} href={"/"}>
          <RiHomeLine />  Home
        </Link>
      </li>
      <li className={`${timeline ? "bg-[#244D3F] text-white rounded-md": ""}`}>
        <Link onClick={handleTimeline} href={"/timeline"}>
          <RiTimeLine /> Timeline
        </Link>
      </li>
      <li className={`${stats ? "bg-[#244D3F] text-white rounded-md": ""}`}>
        <Link onClick={handleStats} href={"/stats"}>
           <VscGraphLine /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Image width={140} height={30} src={"/logo.png"} alt="logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
