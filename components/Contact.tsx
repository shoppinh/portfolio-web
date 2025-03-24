"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const ContactInfo = ({ icon, title, details, delay }: { icon: React.ReactNode, title: string, details: string, delay: number }) => (
  <motion.div 
    className="flex items-start space-x-4 mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-900 dark:text-orange-50">{title}</h4>
      <p className="mt-1 text-gray-600 dark:text-orange-200/80">{details}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<null | "sending" | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      // Here you would typically send the form data to your backend or a service like EmailJS
      console.log("Form submitted:", formData)
      setFormStatus("success");
      // Reset form after submission
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset status after delay
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 bg-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-48 w-48 text-orange-100 dark:text-orange-900/20 opacity-20" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 C40,33 66,52 90,52 C114,52 140,33 180,0 L180,180 L0,180 L0,0 Z" />
        </svg>
        <svg className="absolute right-0 bottom-0 h-48 w-48 text-orange-100 dark:text-orange-900/20 opacity-20 transform rotate-180" viewBox="0 0 200 200" fill="currentColor">
          <path d="M0,0 C40,33 66,52 90,52 C114,52 140,33 180,0 L180,180 L0,180 L0,0 Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50 animate-on-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <motion.div
              className="bg-cream dark:bg-gray-900 p-8 rounded-lg shadow-md border border-orange-100 dark:border-orange-900/50 h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-orange-50">Get In Touch</h3>
              
              <ContactInfo 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Email"
                details="mactrungkien2000@gmail.com"
                delay={0.1}
              />
              
              <ContactInfo 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                title="Phone"
                details="+84 397 273 869"
                delay={0.2}
              />
              
              <ContactInfo 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Location"
                details="Hanoi, Vietnam"
                delay={0.3}
              />
              
              <div className="mt-8 flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-orange-500 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-orange-500 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-orange-500 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="md:col-span-3 animate-on-scroll"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-orange-100 dark:border-orange-900/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-orange-100 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-orange-100 dark:border-gray-700 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-orange-100 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-orange-100 dark:border-gray-700 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 dark:text-orange-100 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-orange-100 dark:border-gray-700 transition-all duration-200"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-orange-100 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-orange-100 dark:border-gray-700 transition-all duration-200"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  className="primary-cta relative bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </motion.button>
                
                {formStatus === "success" && (
                  <motion.div 
                    className="text-sm text-green-600 dark:text-green-400 ml-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully!
                  </motion.div>
                )}
                
                {formStatus === "error" && (
                  <motion.div 
                    className="text-sm text-red-600 dark:text-red-400 ml-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

