import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mactrungkien2000@gmail.com"
              className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Mac Trung Kien. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

