"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Heineken The Boring Phone",
    description: "An 8-bit Snake Game showcasing digital minimalism.",
    image: "/placeholder.svg",
    link: "https://theboringphone.com",
  },
  {
    title: "UMenu-MuaNgay",
    description: "E-commerce platform with optimized store page UI and metrics.",
    image: "/placeholder.svg",
    link: "https://umenu-muangay.com",
  },
  {
    title: "Heineken eKoin",
    description: "Mobile-compatible app with QR code functionality.",
    image: "/placeholder.svg",
    link: "https://ekoin.heineken.com",
  },
  {
    title: "Distributor Salerep App",
    description: "Mobile app using NextAuth and TailwindCSS.",
    image: "/placeholder.svg",
    link: "https://play.google.com/store/apps/details?id=com.distributor.salerep",
  },
  {
    title: "Performance Monitoring Tool",
    description: "Analytics dashboard with React Query and Recharts.",
    image: "/placeholder.svg",
    link: "https://performance-monitor.example.com",
  },
]

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <motion.div
    className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-orange-100 dark:border-orange-900 hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        style={{ objectFit: "cover" }}
        className="transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-orange-50">{project.title}</h3>
      <p className="text-gray-600 dark:text-orange-200/80 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium flex items-center"
      >
        View Project 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-orange-50"
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

