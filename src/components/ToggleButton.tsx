"use client";
import { useTheme } from '@/context/themeContext'
import React from 'react'

const ToggleButton = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ToggleButton