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
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={400}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-500"
      >
        View Project →
      </a>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
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

