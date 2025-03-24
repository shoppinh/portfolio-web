"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Heineken The Boring Phone",
    description: "An 8-bit Snake Game showcasing digital minimalism.",
    image: "/placeholder.svg",
    link: "https://theboringphone.com",
    tags: ["JavaScript", "Canvas API", "Mobile"]
  },
  {
    title: "UMenu-MuaNgay",
    description: "E-commerce platform with optimized store page UI and metrics.",
    image: "/placeholder.svg",
    link: "https://umenu-muangay.com",
    tags: ["React", "E-commerce", "Analytics"]
  },
  {
    title: "Heineken eKoin",
    description: "Mobile-compatible app with QR code functionality.",
    image: "/placeholder.svg",
    link: "https://ekoin.heineken.com",
    tags: ["React Native", "QR Code", "Mobile"]
  },
  {
    title: "Distributor Salerep App",
    description: "Mobile app using NextAuth and TailwindCSS.",
    image: "/placeholder.svg",
    link: "https://play.google.com/store/apps/details?id=com.distributor.salerep",
    tags: ["Next.js", "Auth", "TailwindCSS"]
  },
  {
    title: "Performance Monitoring Tool",
    description: "Analytics dashboard with React Query and Recharts.",
    image: "/placeholder.svg",
    link: "https://performance-monitor.example.com",
    tags: ["React", "Analytics", "Recharts"]
  },
]

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-cream rounded-lg shadow-md overflow-hidden border border-orange-100 dark:border-orange-900/50 animate-on-scroll h-full flex flex-col"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-700 ease-in-out"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-orange-500/70 to-orange-900/40 flex items-end p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium text-sm bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            View Project
          </a>
        </motion.div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-orange-50">{project.title}</h3>
        <p className="text-gray-600 dark:text-orange-200/80 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-300/10 dark:bg-orange-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-400/10 dark:bg-orange-800/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50 animate-on-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

