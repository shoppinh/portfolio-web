"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-bl-full -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-tr-full -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50 animate-on-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0 animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-[400px] h-[400px] rounded-lg shadow-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/avatar.jpg"
                alt="Mac Trung Kien"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-end">
                <span className="text-sm font-medium">Full-Stack Developer</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-4 animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-orange-100/90 leading-relaxed">
                I&apos;m a versatile developer skilled in front-end, mobile app, and backend development. With a passion for
                creating seamless user experiences and robust applications, I bring ideas to life through code.
              </p>
              <p className="text-lg text-gray-700 dark:text-orange-100/90 leading-relaxed">
                My journey in development has led me to work on diverse projects, from e-commerce platforms to mobile apps
                and performance monitoring tools. I&apos;m always eager to learn new technologies and apply them to solve
                real-world problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-orange-100/90 leading-relaxed">
                I&apos;m an Optimizely Certified Commerce Developer, showcasing my expertise in building scalable e-commerce
                solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <a
                  href="/path-to-your-resume.pdf"
                  download
                  className="primary-cta bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition duration-300 inline-block shadow-md hover:shadow-lg"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

