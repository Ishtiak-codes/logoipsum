import React from "react";
import { ArrowUpRight } from "lucide-react";
import { lightOne, lightThree, lightTwo } from "@/assets/images";


type Props = {
  clickCount: number;
};

const socialLinks = ["FACEBOOK", "TWITTER", "LINKEDIN", "INSTAGRAM"];

const FooterSection: React.FC<Props> = () => {
  return (
    <footer className="min-h-screen bg-[#0E221c] text-white mt-[273px]">
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center -space-x-72 mx-auto">
        <img src={lightOne} className="-mt-16" alt="" />
        <img src={lightTwo} alt="" />
        <img src={lightThree} className="-mt-16" alt="" />
      </div>
      <div className="max-w-[1215px] mx-auto pt-16">
        <h1 className="text-[207px] font-serif leading-none tracking-tight mb-32 antic-didone-regular text-center text-nowrap">
          GET IN TOUCH
        </h1>
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-8 pr-24">
          <h2 className="font-light uppercase antic-didone-regular text-2xl tracking-tight">
            Newsletter
          </h2>
          <h2 className="font-light uppercase antic-didone-regular text-2xl tracking-tight">
            Social Media
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-32 mb-32">
          <div>
            <p className="leading-relaxed mb-8 text-gray-300 max-w-md antic-didone-regular">
              STAY CONNECTED WITH BOND &amp; VALE! SUBSCRIBE TO OUR NEWSLETTER
              FOR THE LATEST UPDATES, EXCLUSIVE OFFERS AND INSPIRING DELIVERED
              STRAIGHT TO YOUR INBOX
            </p>
            <p className="text-sm text-white opacity-[32%] mb-4 antic-didone-regular">
              Subscribe to Newsletter
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center gap-2 w-full max-w-[402px] p-1 border-t border-t-gray-400 border-x border-x-gray-400 rounded-full 
  bg-gradient-to-b from-[#295547] via-[#19352D] to-[#142C25] overflow-hidden"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-white/20 opacity-20 pointer-events-none" />

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent px-6 py-2.5 text-white placeholder-white/70 outline-none rounded-full z-10"
              />

              <button
                type="submit"
                className="rounded-full font-semibold px-4 py-2 text-gray-900 bg-[#e8d4b8] transition-colors z-10"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="text-white opacity-[60%] leading-relaxed mb-[6px]">
                Meydan Office, Meydan, Dubai,
                <br />
                United Arab Emirates
              </p>
              <p className="text-white opacity-[60%] mb-[6px]">
                +91 8958388998
              </p>
              <p className="text-white opacity-[60%]">admin@bondandvale.com</p>
            </div>

            <div>
              <div className="space-y-5">
                {socialLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="flex items-center justify-start gap-12 group text-white opacity-[60%] transition-colors"
                  >
                    <span className="w-20">{link}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="border-b border-gray-300 pb-8 text-center text-xl font-light tracking-tighter uppercase antic-didone-regular">
          All rights reserved to Bond &amp; Vale. 2025
        </p>
        <div className="border-t border-gray-800 bg-[#0f1f1c]">
          <div className="max-w-[1400px] mx-auto px-8 pt-6 flex items-center justify-between text-xs">
            <p>©2024 BOND &amp; VALE ALL RIGHTS RESERVED</p>
            <div className="flex items-center gap-6">
              <a href="#">TERMS OF USE</a>
              <a href="#">PRIVACY POLICY</a>
              <a href="#">BACK TO TOP</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
