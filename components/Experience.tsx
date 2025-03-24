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

const ExperienceCard = ({ experience }: { experience: (typeof experiences)[0] }) => (
  <motion.div
    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg mb-6 border-l-4 border-orange-500 dark:border-orange-600"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-orange-50">{experience.position}</h3>
    <h4 className="text-lg text-gray-700 dark:text-orange-200 mb-2">{experience.company}</h4>
    <p className="text-sm text-gray-500 dark:text-orange-300/70 mb-4">{experience.period}</p>
    <p className="text-gray-700 dark:text-orange-100/80">{experience.description}</p>
  </motion.div>
)

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-orange-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-orange-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

