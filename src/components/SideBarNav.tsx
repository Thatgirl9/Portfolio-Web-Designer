"use client";
import React from "react";
// import * as motion from "motion/react-client"
import { FaUser } from "react-icons/fa";
import { IoBriefcaseSharp } from "react-icons/io5";
import { BiSolidEnvelopeOpen } from "react-icons/bi";
import { ImBubbles2 } from "react-icons/im";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useTheme } from "@/context/themeContext";
import ToggleButton from "./ToggleButton";

const SideBarNav = () => {
  const isActive = useSelectedLayoutSegment();
  const pathname = usePathname();
  console.log(pathname, "Pathname");
  console.log(isActive, "Active link");
  const { theme } = useTheme();
  const navItems = [
    {
      link: "/",
      active: null,
      text: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 50 50"
        >
          <path
            fill={pathname === "/" ? "#fff" : theme !== "dark" ?  "#666" : "#ddd" }
            d="M.625 27.824c0 1.125.89 1.805 1.992 1.805c.68 0 1.219-.328 1.688-.797L27.18 7.996c.257-.258.539-.352.843-.352c.282 0 .54.094.82.352l22.852 20.836c.492.469 1.031.797 1.688.797c1.101 0 1.992-.68 1.992-1.805c0-.703-.258-1.148-.703-1.547l-8.11-7.382V5.043c0-1.031-.656-1.687-1.687-1.687h-3.07c-1.008 0-1.711.656-1.711 1.687v7.969l-9.282-8.485C29.992 3.754 28.984 3.38 28 3.38c-.985 0-1.969.375-2.813 1.148L1.328 26.277c-.422.399-.703.844-.703 1.547m6.703 19.664c0 3.258 1.969 5.157 5.273 5.157h9.493V35.98c0-1.078.726-1.78 1.804-1.78h8.274c1.078 0 1.781.702 1.781 1.78v16.665h9.469c3.304 0 5.25-1.899 5.25-5.157V30.332l-19.899-17.93c-.258-.234-.539-.351-.82-.351c-.258 0-.516.117-.797.375L7.328 30.449Z"
          />
        </svg>
      ),
    },
    { link: "/profile", active: "profile", text: "Profile", icon: <FaUser /> },
    {
      link: "/portfolio",
      active: "portfolio",
      text: "Portfolio",
      icon: <IoBriefcaseSharp />,
    },
    {
      link: "/contact",
      active: "contact",
      text: "Contact",
      icon: <BiSolidEnvelopeOpen />,
    },
    { link: "/blog", active: "blog", text: "Blog", icon: <ImBubbles2 /> },
  ];

  return (
    <div className=" flex flex-col gap-20 lg:gap-20 xl:justify-center xl:gap-0 sideNav w-full lg:w-[51px] fixed bottom-0 lg:sticky lg:right-0 lg:bottom-0 lg:h-full dark:bg-background-8 dark:lg:bg-transparent bg-white shadow-xl lg:shadow-none dark:shadow-none lg:bg-transparent z-50 lg:pt-0">
      <div className="hidden lg:block">
        <ToggleButton/>
      </div>
      
      

      <div className="flex flex-row justify-around lg:justify-normal lg:flex-col lg:gap-4 dark:lg:bg-transparent dark:bg-background-8  bg-white z-70 py-1 lg:bg-transparent lg:py-0">
        {navItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full bg-background-2 dark:bg-background-10 cursor-pointer hover:bg-background-1 group ${
              pathname === item.link
                ? "!bg-background-1"
                : "bg-background-2"
            }`}
          >
            <span
              className={`text-lg font-medium group-hover:text-white ${
                pathname === item.link
                  ? "!text-white"
                  : "text-primaryText-0 dark:text-background-9"
              }`}
            >
              {item.icon}
            </span>
          </Link>
        ))}
      </div>

      {/* {navItems.map((item) => (
        <motion.div
          key={item.id}
          className="z-40 flex items-center space-x-3 bg-background-1 text-background-0 px-3 py-2 rounded-l-full cursor-pointer"
          initial={{ width: "50px" }} // Only icon visible at start
          whileHover={{ width: "150px" }} // Expand when hovered
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Icon (Always Visible) 
          <div className="text-xl">{item.icon}</div>

          {/* Text (Hidden initially, slides in on hover) 
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ opacity: 1, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="whitespace-nowrap z-40"
          >
            {item.text}
          </motion.span>
        </motion.div>
      ))} */}
    </div>
  );
};

export default SideBarNav;
