"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Niteco",
    position: "Full-Stack Developer",
    period: "Jan 2022 - Present",
    description:
      "Developed and maintained scalable web applications using React, Next.js, and ASP.NET Core. Implemented CI/CD pipelines with Azure DevOps.",
  },
  {
    company: "SATSi",
    position: "Front-End Developer",
    period: "Jun 2020 - Dec 2021",
    description:
      "Improved cross-browser compatibility and user experience for various web applications. Worked with React and Vue.js frameworks.",
  },
  {
    company: "VMG Media",
    position: "Intern",
    period: "Jan 2020 - May 2020",
    description:
      "Contributed to the development of autonomous systems. Collaborated with senior developers on various projects.",
  },
]

const ExperienceCard = ({ experience, index }: { experience: (typeof experiences)[0]; index: number }) => (
  <motion.div
    className="animate-on-scroll relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="flex flex-col md:flex-row">
      {/* Timeline visualization for larger screens */}
      <div className="hidden md:flex flex-col items-center mr-8">
        <div className="w-4 h-4 rounded-full bg-orange-500 dark:bg-orange-400 z-10"></div>
        {index !== experiences.length - 1 && (
          <div className="w-0.5 h-full bg-orange-200 dark:bg-orange-700 mt-2"></div>
        )}
      </div>
      
      <div className="mb-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-orange-500 dark:border-orange-600 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-orange-50">{experience.position}</h3>
          <div className="inline-block px-3 py-1 mt-2 md:mt-0 text-sm font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full">
            {experience.period}
          </div>
        </div>
        <h4 className="text-lg text-gray-700 dark:text-orange-200 mb-3">{experience.company}</h4>
        <p className="text-gray-700 dark:text-orange-100/80 leading-relaxed">{experience.description}</p>
      </div>
    </div>
  </motion.div>
)

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50 animate-on-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

