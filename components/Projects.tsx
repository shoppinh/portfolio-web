"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Heineken Hustle App",
    description:
      "A super app for Heineken Internal Users for space booking, event management, betting, ticket reporting, etc.",
    image: "/placeholder.jpg",
    link: "https://play.google.com/store/apps/details?id=com.heineken.theboringmode&hl=en",
    tags: ["React Native", "Azure AD", "NextJS", "ASP.NET"],
  },
  {
    title: "Heineken The Boring Mode",
    description: "An 8-bit Snake Game showcasing digital minimalism.",
    image: "/boring-mode.png",
    link: "https://play.google.com/store/apps/details?id=com.heineken.theboringmode&hl=en",
    tags: ["React Native", "TailwindCSS", "Mobile"],
  },
  {
    title: "UMenu-MuaNgay",
    description:
      "E-commerce platform with optimized store page UI and metrics.",
    image: "/muangay.png",
    link: "https://app.muangay-vn.com/",
    tags: ["ReactJS", "E-commerce", "NestJS"],
  },
  {
    title: "Heineken eKoin",
    description: "Mobile-compatible app with QR code functionality.",
    image: "/ekoin.png",
    link: "https://www.ekoin.net/",
    tags: ["React Native", "QR Code", "Mobile", "TailwindCSS"],
  },
  {
    title: "Distributor Salerep App",
    description: "Mobile app using NextAuth and TailwindCSS.",
    image: "/dsr.jpg",
    link: "https://play.google.com/store/apps/details?id=com.heinekenmy.dsr&hl=vi",
    tags: ["NextJS", "Next-Auth", "TailwindCSS", "NestJS"],
  },
  {
    title: "Performance Monitoring Tool",
    description: "Analytics dashboard with React Query and Recharts.",
    image: "/perfmon.jpg",
    link: "https://perf.niteco.com/",
    tags: ["ReactJS", "Analytics", "Recharts", "NestJS", "React-Query"],
  },
];

const personalProjects = [
  {
    title: "Parent Teacher Communication App",
    description: "A mobile app for parents and teachers to communicate with each other.",
    image: "/placeholder.jpg",
    link: "https://github.com/shoppinh/parent_teacher_communication_FE",
    tags: ["React Native", "TailwindCSS", "Mobile", "ReactJS", "NestJS"],
  },
  {
    title: "Smart Inventory Management System",
    description: "A web app for managing inventory and orders.",
    image: "/placeholder.jpg",
    link: "https://github.com/shoppinh/fullstack-smart-inventory",
    tags: ["NestJS", "TailwindCSS", "Web", "NextJS"],
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-cream rounded-lg shadow-md overflow-hidden border border-orange-100 dark:border-orange-900/50 animate-on-scroll h-full flex flex-col"
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.jpg"}
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
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-orange-50">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-orange-200/80 mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-300/10 dark:bg-orange-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-400/10 dark:bg-orange-800/5 rounded-full blur-3xl"></div>
      </div>
      {/* Work Projects */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50 animate-on-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Projects
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
      <div className="h-10"></div>
      {/* Personal Projects */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-orange-50 animate-on-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Personal Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
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
  );
};

export default Projects;
