"use client"

import { motion } from "framer-motion"

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-orange-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto bg-orange-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-orange-100 dark:border-orange-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-orange-50">Engineer in Information Technology</h3>
          <h4 className="text-lg text-gray-700 dark:text-orange-200 mb-2">Military Technical Academy</h4>
          <p className="text-gray-700 dark:text-orange-100/80 mb-4">GPA: 3.2</p>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-orange-50">Certifications</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-orange-100/80">
            <li>IELTS 6.5</li>
            <li>TOEIC 950</li>
            <li>Optimizely Certified Commerce Developer</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

