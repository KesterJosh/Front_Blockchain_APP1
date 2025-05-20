import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import Image from "next/image";
import images from "../../public/images";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-0">
      <div className="container w-full  mx-auto px-4 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
        {/* Left: Logo and Description */}
        <div className="w-full 2xs:w-[80%] sm:w-[70%] lg:w-[40%]  flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={images.logo}
              alt="viper coin logo"
              width={48}
              height={48}
            />
            <div className="text-2xl font-bold leading-tight">
              Viper Exchange
            </div>
          </div>
          <div className="text-[#e5e5e5] text-sm mb-4 lg:max-w-xs">
            Your Adventure, Your Reward. Earn cryptocurrency as you explore new
            destinations with the Viper Exchange app.
          </div>
          <div className="mt-2 mb-1 font-medium">Follow us</div>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
        {/* Center: Links */}
        <div className=" w-[90%] lg:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-0">
          <div>
            <div className="font-semibold mb-3">Products</div>
            <ul className="space-y-2 text-[#e5e5e5]">
              <li>
                <a href="#">Tokens</a>
              </li>
              <li>
                <a href="#">NFTs</a>
              </li>
              <li>
                <a href="#">Crypto</a>
              </li>
              <li>
                <a href="#">DeFi</a>
              </li>
              <li>
                <a href="#">Alts</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Resources</div>
            <ul className="space-y-2 text-[#e5e5e5]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Learn</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Fee Schedule</a>
              </li>
              <li>
                <a href="#">How We Make Money</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact Us</div>
            <ul className="space-y-2 text-[#e5e5e5]">
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="mailto:support@vipercoin.com">support@vipercoin.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#232323] text-center text-[#e5e5e5] text-sm py-4 mt-8">
        © {new Date().getFullYear()} Viper Exchange
      </div>
    </footer>
  );
};

export default Footer;
