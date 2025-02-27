"use client";
import { useTheme } from "@/context/themeContext";
import React from "react";
import { IoMoonOutline} from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`toggleButton w-[50px] h-[50px] flex items-center justify-center mt-6 rounded-full dark:bg-background-7 ${
        theme === "light" ? "bg-background-2 " : "bg-background-7"
      }cursor-pointer`}
      onClick={toggleTheme}
    >
      <span
        className={`text-2xl ${
          theme === "light" ? "text-primaryText-0" : "text-white"
        } font-medium`}
      >
        {theme === "light" ? <IoMoonOutline /> : <BsSunFill />}
      </span>
    </button>
  );
};

export default ToggleButton;
