"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TailwindCSS", level: 95 },
  { name: "MaterialUI", level: 80 },
  { name: "NestJS", level: 75 },
  { name: "ASP.NET Core", level: 70 },
  { name: "Node.js", level: 85 },
  { name: "Azure DevOps", level: 65 },
  { name: "Terraform", level: 60 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Python", level: 75 },
  { name: "C#", level: 70 },
]

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-800 dark:text-orange-100">{name}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-orange-200">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-900">
      <motion.div
        className="bg-gradient-to-r from-orange-500 to-orange-400 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
    </div>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-orange-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-orange-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

