"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const FloatingShape = ({ delay, x, y, size, className }: { delay: number, x: string, y: string, size: string, className: string }) => (
  <div 
    className={`absolute ${x} ${y} w-${size} h-${size} rounded-full opacity-70 ${className}`}
    style={{
      animationDelay: `${delay}s`,
    }}
  />
)

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream to-white dark:from-navy dark:to-gray-900">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape delay={0} x="top-1/4" y="left-1/4" size="12" className="bg-orange-200/20 dark:bg-orange-900/20 animate-float" />
        <FloatingShape delay={1.5} x="top-1/3" y="right-1/3" size="16" className="bg-orange-300/10 dark:bg-orange-800/10 animate-float" />
        <FloatingShape delay={3} x="bottom-1/4" y="right-1/4" size="24" className="bg-orange-100/10 dark:bg-orange-700/10 animate-float" />
        <FloatingShape delay={2} x="bottom-1/3" y="left-1/3" size="20" className="bg-orange-400/5 dark:bg-orange-600/5 animate-float" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-orange-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          Mac Trung Kien
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-gray-700 dark:text-orange-200 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Full-Stack Developer
        </motion.h2>
        <motion.p
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-600 dark:text-orange-100/80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          Building seamless and scalable applications with a touch of innovation.
        </motion.p>
        <motion.div
          className="space-x-4 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <Link
            href="/#projects"
            className="primary-cta bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg inline-block"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300  dark:text-orange-100 dark:hover:text-black dark:hover:bg-white/80 border border-orange-200 dark:border-orange-800 shadow-md hover:shadow-lg inline-block"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-700 dark:text-orange-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

