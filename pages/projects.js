import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function ProjectsPage() {
return (
<div className="dark:bg-black min-h-screen py-20 px-6">
<Header />
<h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-white mb-12">All Projects</h1>
<div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
{/* Add all your projects here */}
</div>
<Footer />
</div>
)
}