"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg"
              alt="Mac Trung Kien"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6">
              I&apos;m a versatile developer skilled in front-end, mobile app, and backend development. With a passion for
              creating seamless user experiences and robust applications, I bring ideas to life through code.
            </p>
            <p className="text-lg mb-6">
              My journey in development has led me to work on diverse projects, from e-commerce platforms to mobile apps
              and performance monitoring tools. I&apos;m always eager to learn new technologies and apply them to solve
              real-world problems.
            </p>
            <p className="text-lg mb-6">
              I&apos;m an Optimizely Certified Commerce Developer, showcasing my expertise in building scalable e-commerce
              solutions.
            </p>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 inline-block"
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

