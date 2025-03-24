"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white dark:from-black dark:to-gray-900">
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-orange-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mac Trung Kien
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-gray-700 dark:text-orange-200 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-Stack Developer
        </motion.h2>
        <motion.p
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-600 dark:text-orange-100/80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Building seamless and scalable applications with a touch of innovation.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/#projects"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="bg-white text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300 dark:bg-black dark:text-orange-100 dark:hover:bg-gray-900 border border-orange-200 dark:border-orange-800 shadow-md hover:shadow-lg"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

