import React from 'react'
import * as motion from "motion/react-client"
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const SideBarNav = () => {
  const navItems = [
    { id: 1, text: "Home", icon: <FaHome /> },
    { id: 2, text: "Profile", icon: <FaUser /> },
    { id: 3, text: "Settings", icon: <FaCog /> },
  ];
  return (
    <div className=" flex flex-col gap-4 ">
      {navItems.map((item) => (
        <motion.div
          key={item.id}
          className="z-40 flex items-center space-x-3 bg-background-1 text-background-0 px-3 py-2 rounded-l-full cursor-pointer"
          initial={{ width: "50px" }} // Only icon visible at start
          whileHover={{ width: "150px" }} // Expand when hovered
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Icon (Always Visible) */}
          <div className="text-xl">{item.icon}</div>

          {/* Text (Hidden initially, slides in on hover) */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="whitespace-nowrap z-40"
          >
            {item.text}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default SideBarNav