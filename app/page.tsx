"use client"

import { useEffect } from "react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  useEffect(() => {
    // Initialize scroll-based animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <div className="animate-page">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

