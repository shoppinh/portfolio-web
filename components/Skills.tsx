"use client"

import { motion } from "framer-motion"

// Group skills by category
const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "MaterialUI", level: 80 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "NestJS", level: 75 },
      { name: "ASP.NET Core", level: 70 },
      { name: "Node.js", level: 85 },
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Azure DevOps", level: 65 },
      { name: "Terraform", level: 60 },
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "C#", level: 70 },
    ]
  }
]

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div 
    className="mb-4"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-800 dark:text-orange-100">{name}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-orange-200">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-900">
      <motion.div
        className="bg-gradient-to-r from-orange-500 to-orange-400 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </div>
  </motion.div>
)

const SkillCategory = ({ group, index }: { group: typeof skillGroups[0]; index: number }) => (
  <motion.div 
    className="animate-on-scroll bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-100/50 dark:border-orange-900/50"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-orange-200">{group.category}</h3>
    {group.skills.map((skill, idx) => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
    ))}
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <SkillCategory key={group.category} group={group} index={index} />
          ))}
        </div>
        
        {/* Visual elements */}
        <div className="absolute top-20 -right-20 w-64 h-64 bg-orange-200/20 dark:bg-orange-800/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -left-20 w-64 h-64 bg-orange-300/20 dark:bg-orange-600/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  )
}

export default Skills

