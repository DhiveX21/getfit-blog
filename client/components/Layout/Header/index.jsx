import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div
      className="header w-full  bg-white fixed top-[0px] shadow-xl"
      style={{ zIndex: 10 }}
    >
      <div className="header__wrapper flex justify-between items-center p-[10px] bg-transparent md:px-[30px] md:py-[20px]">
        <div className="header__logo flex items-center gap-[5px]">
          <picture>
            <img src="/images/logo.png" width={30} alt="home" />
          </picture>
          <span className="text-gray-500 text-[12px] lg:text-[16px]">
            Get Fisio | Blogs
          </span>
        </div>
        <div className="header__nav">
          <nav>
            <ul className="flex  text-gray-500 text-[12px] gap-[5px] md:gap-[20px] md:text-[16px]">
              <li className="hover:bg-gray-200 duration-300 px-[5px] md:px-[10px] rounded">
                <a href="https://getfitwithphysio.com" rel="noopener">
                  Website Utama
                </a>
              </li>
              <li className="hover:bg-gray-200 duration-300 px-[10px] rounded">
                <Link href="/">Menu Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
