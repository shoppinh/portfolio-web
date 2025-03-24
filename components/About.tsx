"use client"

import { motion } from "framer-motion"
import Image from "next/image"
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-orange-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[400px] h-[400px] shadow-lg overflow-hidden ring-2 ring-orange-200 dark:ring-orange-800 rounded-full">
              <Image
                src="/avatar.jpg"
                alt="Mac Trung Kien"
                fill
                style={{ objectFit: "contain" }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 text-gray-700 dark:text-orange-100/90">
              I&apos;m a versatile developer skilled in front-end, mobile app, and backend development. With a passion for
              creating seamless user experiences and robust applications, I bring ideas to life through code.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-orange-100/90">
              My journey in development has led me to work on diverse projects, from e-commerce platforms to mobile apps
              and performance monitoring tools. I&apos;m always eager to learn new technologies and apply them to solve
              real-world problems.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-orange-100/90">
              I&apos;m an Optimizely Certified Commerce Developer, showcasing my expertise in building scalable e-commerce
              solutions.
            </p>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300 inline-block shadow-md hover:shadow-lg"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

