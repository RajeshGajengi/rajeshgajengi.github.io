// components/ProjectCard.js
import Link from "next/link"
import { motion } from "framer-motion"
import TechIconInline from "./TechIconInline"

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ translateY: -6, scale: 1.01 }}
      className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-darkBorder 
                 bg-white dark:bg-darkCard shadow-md hover:shadow-2xl transition"
    >
      <Link href={`/projects/${project.slug}`} className="block p-6">
        {/* Top: title + short */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-slate-100">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.short}</p>
        </div>

        {/* Tech chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
  key={t}
  className="
    inline-flex items-center gap-2
    px-3 py-1 rounded-full text-sm font-medium
    bg-gray-200 text-gray-900
    dark:bg-[#1e2b3a] dark:text-gray-100
    border border-gray-300 dark:border-gray-600
    shadow-sm
  "
>
  <TechIconInline name={t} size={18} />
  <span className="leading-none">{t}</span>
</span>
          ))}
        </div>

        {/* footer meta */}
        <div className="mt-5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div>{project.date}</div>
          <div className="text-indigo-600 dark:text-indigo-300">Read details →</div>
        </div>
      </Link>

      {/* subtle gradient accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20"></div>
    </motion.article>
  )
}
