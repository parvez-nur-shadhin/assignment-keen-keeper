import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-10 mt-20">
      <div className="max-w-400 mx-auto px-4">
        <h1 className="text-center text-white text-6xl font-semibold">
          <span className="font-bold">Keen</span>Keeper
        </h1>
        <p className="text-center text-white mt-4">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="text-center mt-6">
          <h1 className="text-white text-[20px] font-medium">Social Links</h1>
          <ul className=" flex items-center justify-center gap-4">
            <li>
              <Link href={"/"}>
                <FaInstagramSquare size={30} />
              </Link>
            </li>

            <li>
              <Link href={"/"}>
                <FaFacebookSquare size={30} />
              </Link>
            </li>

            <li>
              <Link href={"/"}>
                <FaSquareXTwitter size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-[#1A8862] px-4 py-7 mt-7">
          <div>
            <h4 className="text-[#FAFAFA]">
              © 2026 KeenKeeper. All rights reserved.
            </h4>
          </div>
          <div className="text-[#FAFAFA]">
            <ul className="flex justify-end gap-6 items-center">
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
              <li>
                <a>Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
