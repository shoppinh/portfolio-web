"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            MTK
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/#about"
              className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              Contact
            </Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

