import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-orange-100/20 dark:border-orange-800/20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/shoppinh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kien-mac-trung-679829193/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mactrungkien2000@gmail.com"
              className="text-gray-600 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-orange-200/70 text-sm">
            © {new Date().getFullYear()} Mac Trung Kien. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

