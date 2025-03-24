"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream dark:bg-gray-900 border-t border-orange-100/20 dark:border-orange-800/20 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.h3 
              className="text-xl font-semibold mb-4 text-gray-900 dark:text-orange-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mac Trung Kien
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-orange-200/70 mb-4 max-w-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full-stack developer specialized in creating elegant, high-performance web applications with a focus on user experience and accessibility.
            </motion.p>
          </div>
          
          <div>
            <motion.h4 
              className="text-base font-semibold mb-4 text-gray-800 dark:text-orange-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li>
                <a href="#about" className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors link-effect">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors link-effect">Projects</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors link-effect">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors link-effect">Contact</a>
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h4 
              className="text-base font-semibold mb-4 text-gray-800 dark:text-orange-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect
            </motion.h4>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href="https://github.com/shoppinh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kien-mac-trung-679829193/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:mactrungkien2000@gmail.com"
                className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-orange-100/20 dark:border-orange-800/20 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-orange-200/70 text-sm">
            © {currentYear} Mac Trung Kien. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-orange-200/50 text-xs mt-2 md:mt-0">
            Designed with ❤️ and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

