import { motion } from 'framer-motion'


export default function ProjectCard({ project }) {
return (
<motion.div
whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
transition={{ type: 'spring', stiffness: 120 }}
className="bg-white dark:bg-darkCard border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl"
>
<h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
<p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
<div className="mt-4 flex justify-between items-center">
<div className="text-xs text-gray-500 dark:text-gray-400">{project.stack.join(' • ')}</div>
<a
href={project.link}
target="_blank"
className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow"
>View</a>
</div>
</motion.div>
)
}