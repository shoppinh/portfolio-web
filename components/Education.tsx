"use client"

import { motion } from "framer-motion"

const certifications = [
  { name: "IELTS 6.5", icon: "🌎" },
  { name: "TOEIC 950", icon: "📝" },
  { name: "Optimizely Certified Commerce Developer", icon: "🛒" },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-cream  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-orange-200/30 dark:bg-orange-700/10 rounded-tl-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50 animate-on-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-orange-100 dark:border-orange-900/50 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-orange-50">Engineer in Information Technology</h3>
            <h4 className="text-lg text-gray-700 dark:text-orange-200 mb-2 flex items-center">
              <span className="mr-2">Military Technical Academy</span>
              <span className="inline-block w-1 h-1 rounded-full bg-orange-500"></span>
            </h4>
            
            <div className="mt-4 flex items-center">
              <div className="text-xl font-bold text-orange-600 dark:text-orange-400 mr-3">GPA: 3.2</div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3].map(star => (
                  <svg key={star} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                {[4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="animate-on-scroll bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-orange-100 dark:border-orange-900/50 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-orange-50">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li 
                  key={cert.name}
                  className="flex items-center text-gray-700 dark:text-orange-100/80"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3 text-xl">
                    {cert.icon}
                  </div>
                  <span>{cert.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

