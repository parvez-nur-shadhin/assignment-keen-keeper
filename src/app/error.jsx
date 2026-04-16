'use client'

import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";

const error = () => {
    return (
        <div className="mt-10">
            <h1 className='text-6xl text-[#244d3f] font-bold text-center'>404</h1>
            <h1 className='font-bold text-3xl text-center text-gray-500 mt-3'>Page Not Found</h1>
            <div className="mx-auto text-center mt-3">
                <Link href={"/"}>
                    <button className="btn bg-[#244d3f] text-white"><RiHomeLine /> Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default error;