// pages/projects/index.js
import Head from "next/head"
import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProjectCard from "../../components/ProjectCard"
import { projects as allProjects } from "../../lib/projects"
import { useState, useMemo } from "react"

export default function ProjectsPage() {
  const [query, setQuery] = useState("")
  const [techFilter, setTechFilter] = useState("All")
  const [perPage] = useState(12) // how many to show on projects page

  // build a set of tech tags for filter UI
  const techSet = useMemo(() => {
    const s = new Set()
    allProjects.forEach((p) => p.tech.forEach((t) => s.add(t)))
    return ["All", ...Array.from(s)]
  }, [])

  // filter
  const filtered = allProjects.filter((p) => {
    const matchesQuery = query.trim() === "" || `${p.title} ${p.short} ${p.tech.join(" ")}`.toLowerCase().includes(query.toLowerCase())
    const matchesTech = techFilter === "All" || p.tech.includes(techFilter)
    return matchesQuery && matchesTech
  })

  return (
    <>
      <Head>
        <title>Projects — Rajesh Gajengi</title>
        <meta name="description" content="Portfolio projects — DevOps, monitoring, CI/CD, ML" />
      </Head>

      <Header />

      <main className="container mx-auto px-6 py-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Projects & Case Studies
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Selected work — architecture, infra automation, monitoring, and ML projects. Click any card to view full details.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech or keywords..."
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-3 items-center">
            <div className="hidden md:block text-sm text-gray-600 dark:text-gray-300">Filter:</div>
            <select
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="p-2 rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-700 dark:text-gray-200"
            >
              {techSet.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            <Link href="/" className="ml-2 text-indigo-600 dark:text-indigo-300">← Home</Link>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {filtered.slice(0, perPage).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {/* show count and more link */}
        <div className="mt-8 max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <div>{filtered.length} project{filtered.length !== 1 ? "s" : ""} found</div>
          <div>
            <Link href="/" className="text-indigo-600 dark:text-indigo-300 mr-4">← Back</Link>
            {/* Per your request: More projects could be paginated / load more */}
            {/* (You can implement load more if you want) */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
