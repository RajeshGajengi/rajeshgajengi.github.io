
/* ==================================================
   pages/index.js — DevOps About + Full Dark Mode
================================================== */
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import ThemeToggle from '../components/ThemeToggle'
import { motion } from 'framer-motion'
import Typewriter from '../components/Typewriter'

// inside the component's return:


import { useEffect } from 'react';


const projects = [
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Designed a full GitHub Actions → Docker → Kubernetes deployment pipeline.',
    stack: ['GitHub Actions', 'Docker', 'K8s'],
    link: '#'
  },
  {
    title: 'Monitoring + Alerting System',
    description: 'Implemented Prometheus + Grafana + Alertmanager for production workloads.',
    stack: ['Prometheus', 'Grafana', 'Linux'],
    link: '#'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-darkBg transition-colors duration-300">

      <Head>
        <title>Rajesh Gajengi — DevOps Engineer Portfolio</title>
      </Head>

      <Header />

      <div className="flex justify-end mt-4 px-6">
        <ThemeToggle />
      </div>

      <main className="container mx-auto px-6 py-20">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="pt-2 text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
            dark:from-purple-500 dark:to-pink-500 bg-clip-text text-transparent leading-tight">
            <Typewriter text={"Hi, I'm Rajesh - DevOps Engineer"} speed={80} />
            </h1>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg">
              Building scalable cloud infrastructure, automating deployments, and improving system reliability with AWS, Kubernetes, and CI/CD pipelines.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl hover:scale-105 transition">
                🚀 View Projects
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl hover:scale-105 transition">
                📩 Contact
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="flex justify-center">
            <img src="/Rajesh-Photo.jpg" alt="Rajesh Avatar" className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-indigo-500"/>
          </motion.div>
        </section>

        {/* ABOUT SECTION — DEVOPS FOCUSED */}
        <section id="about" className="mt-24">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
            I am a DevOps Engineer with a strong background in IT operations and cloud technologies. I specialize in AWS, Terraform, Docker, Kubernetes, CI/CD automation, and monitoring tools. 
            My focus is on streamlining deployments, ensuring high availability, and implementing efficient infrastructure as code to help organizations deliver software faster and more reliably.
          </p>

          {/* SKILLS */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl bg-white dark:bg-darkCard shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-300">Cloud</h3>
              <ul className="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>AWS (EC2, VPC, S3, IAM)</li>
                <li>Azure Basics</li>
                <li>Cloud Networking</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-darkCard shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-300">DevOps Tools</h3>
              <ul className="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Docker • Kubernetes</li>
                <li>Terraform • Ansible</li>
                <li>Helm Charts</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-darkCard shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-300">CI/CD & Automation</h3>
              <ul className="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>GitHub Actions</li>
                <li>Jenkins Pipelines</li>
                <li>Shell & Python Automation</li>
              </ul>
            </div>

          </div>
        </section>


        {/* PROJECTS */}
        <section id="projects" className="mt-24">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </section>



        {/* CONTACT SECTION */}
        <section id="contact" className="mt-24">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-slate-100">
            Contact Me
        </h2>

        <p className="mt-3 text-gray-700 dark:text-slate-300 max-w-xl">
            Feel free to reach out for collaboration, project help, or any queries.
        </p>

        <form
            action="#"
            method="POST"
            className="mt-10 grid grid-cols-1 gap-6 max-w-2xl p-6 rounded-2xl
                    bg-white dark:bg-darkCard border border-gray-200 dark:border-darkBorder 
                    shadow-xl transition"
        >
            {/* Full Name */}
            <div>
            <label className="block text-gray-800 dark:text-slate-200 font-medium">
                Full Name
            </label>
            <input
                type="text"
                placeholder="Enter your full name"
                required
                className="mt-2 w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1a1c25]
                        border border-gray-300 dark:border-darkBorder
                        text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2
                        focus:ring-blue-600 dark:focus:ring-purple-500"
            />
            </div>

            {/* Contact Number */}
            <div>
            <label className="block text-gray-800 dark:text-slate-200 font-medium">
                Contact Number
            </label>
            <input
                type="text"
                placeholder="Enter your phone number"
                required
                className="mt-2 w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1a1c25]
                        border border-gray-300 dark:border-darkBorder
                        text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2
                        focus:ring-blue-600 dark:focus:ring-purple-500"
            />
            </div>

            {/* Email */}
            <div>
            <label className="block text-gray-800 dark:text-slate-200 font-medium">
                Email Address
            </label>
            <input
                type="email"
                placeholder="Enter your email"
                required
                className="mt-2 w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1a1c25]
                        border border-gray-300 dark:border-darkBorder
                        text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2
                        focus:ring-blue-600 dark:focus:ring-purple-500"
            />
            </div>

            {/* Description */}
            <div>
            <label className="block text-gray-800 dark:text-slate-200 font-medium">
                What do you need?
            </label>
            <textarea
                placeholder="Tell me about your need or request…"
                rows="5"
                required
                className="mt-2 w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1a1c25]
                        border border-gray-300 dark:border-darkBorder
                        text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2
                        focus:ring-blue-600 dark:focus:ring-purple-500 resize-none"
            ></textarea>
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold
                        bg-gradient-to-r from-blue-600 to-purple-600 
                        dark:from-purple-500 dark:to-pink-500
                        shadow-lg hover:scale-105 transition-all"
            >
            Submit
            </button>
        </form>
        </section>


       


      </main>

      <Footer />
    </div>
  )
}
