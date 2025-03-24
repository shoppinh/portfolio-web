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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 backdrop-blur-sm border-b border-orange-100/20 dark:border-orange-500/10 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-black dark:text-orange-50">
            MTK
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/#about"
              className="text-gray-800 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="text-gray-800 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="text-gray-800 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-gray-800 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="text-gray-800 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-500 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900 transition-colors"
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

