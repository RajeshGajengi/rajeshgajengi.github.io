// pages/projects/[slug].js
import Head from "next/head"
import Link from "next/link"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { projects } from "../../lib/projects"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import TechIconInline from "../../components/TechIconInline"
import TechIcon from "../../components/TechIcon"


export async function getStaticPaths() {
  const paths = projects.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null
  return { props: { project } }
}

export default function ProjectDetails({ project }) {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 })

  if (!project) return null

  const openLightbox = (i) => setLightbox({ open: true, idx: i })
  const closeLightbox = () => setLightbox({ open: false, idx: 0 })

  // related projects: pick up to 3 others
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <Head>
        <title>{project.title} — Rajesh</title>
        <meta name="description" content={project.short} />
      </Head>

      <Header />

      <div className="min-h-screen bg-white dark:bg-darkBg transition-colors duration-300">
        <main className="container mx-auto px-6 py-16">
          <Link href="/projects" className="text-indigo-600 dark:text-indigo-300">← Back to projects</Link>

          {/* HERO + META */}
          <div className="mt-6 grid gap-8 md:grid-cols-3 items-start">
            <div className="md:col-span-2">
              <motion.h1
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white"
              >
                {project.title}
              </motion.h1>

              <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">{project.short}</p>

              {/* actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow">
                    Live demo
                  </a>
                )}

                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600
                               bg-gray-100 dark:bg-[#1b2533] text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-[#243042] transition">
                    {/* small repo icon */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.78 5.36.78 11.72c0 4.79 3.1 8.85 7.41 10.28.54.1.74-.24.74-.52 0-.26-.01-1.01-.01-1.98-3.01.66-3.65-1.45-3.65-1.45-.49-1.26-1.2-1.6-1.2-1.6-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.64 2.53 1.17 3.15.9.1-.7.37-1.17.67-1.44-2.4-.27-4.93-1.2-4.93-5.33 0-1.18.42-2.14 1.11-2.9-.11-.28-.48-1.41.11-2.94 0 0 .9-.29 2.95 1.1a10.2 10.2 0 012.68-.36c.91.01 1.83.12 2.68.36 2.05-1.38 2.95-1.1 2.95-1.1.59 1.53.23 2.66.11 2.94.69.76 1.11 1.72 1.11 2.9 0 4.14-2.54 5.06-4.96 5.32.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .28.2.63.75.52 4.31-1.44 7.41-5.5 7.41-10.29C23.22 5.36 18.35.5 12 .5z"></path></svg>
                    Source
                  </a>
                )}
              </div>

              {/* tech chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                 bg-gray-200 text-gray-900 dark:bg-[#1e2b3a] dark:text-gray-100
                 border border-gray-300 dark:border-gray-600 shadow-sm">
                <TechIcon name={t} /> {t}
                </span>

                ))}
              </div>
            </div>

            {/* right column: metadata card */}
            <aside className="p-4 rounded-2xl bg-white dark:bg-darkCard border border-gray-200 dark:border-darkBorder shadow">
              <div className="text-sm text-gray-600 dark:text-gray-300"><strong>Date:</strong> {project.date}</div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-300"><strong>Stack:</strong></div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-[#0f1724] dark:text-gray-200">{t}</span>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-sm text-gray-500 dark:text-gray-400">Role</div>
                <div className="mt-1 font-medium text-gray-800 dark:text-white">Lead DevOps Engineer</div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                <div className="mt-1 text-gray-800 dark:text-white">{project.duration || "3 months"}</div>
              </div>
            </aside>
          </div>

          {/* main content */}
          <section className="mt-10 grid gap-8 md:grid-cols-3">
            <article className="md:col-span-2 max-w-none text-gray-700 dark:text-gray-200 leading-relaxed">

                {/* Overview */}
                <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">
                    Overview
                </h2>
                <p className="mb-6">
                    {project.long}
                </p>

                {/* Features */}
                <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">
                    Features
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                    {project.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                    ))}
                </ul>

                {/* Challenges */}
                <h2 className="text-2xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">
                    Challenges
                </h2>
                <ul className="list-disc ml-6 space-y-2">
                    {project.challenges?.map((c, i) => (
                    <li key={i}>{c}</li>
                    ))}
                </ul>

            </article>


            {/* Gallery */}
            <div className="space-y-4">
              {project.screenshots?.length > 0 ? (
                <div className="grid gap-4">
                  {project.screenshots.map((src, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden border border-gray-200 dark:border-darkBorder">
                      <button onClick={() => openLightbox(i)} className="block w-full focus:outline-none">
                        <img src={src} alt={`${project.title} screenshot ${i+1}`} className="w-full h-48 object-cover" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg p-6 bg-gray-50 dark:bg-[#0c1720] text-gray-600 dark:text-gray-300">
                  No screenshots available.
                </div>
              )}
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Related projects</h4>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <motion.div key={r.slug} whileHover={{ translateY: -6 }} className="rounded-xl overflow-hidden border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard p-4">
                    <Link href={`/projects/${r.slug}`} className="block">
                      <h5 className="font-semibold text-gray-900 dark:text-white">{r.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{r.short}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>

      {/* Lightbox modal */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-4xl w-full p-4">
            <div className="bg-white dark:bg-darkCard rounded-xl overflow-hidden">
              <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-darkBorder">
                <div className="text-sm text-gray-700 dark:text-gray-300">{project.title} — screenshot {lightbox.idx + 1}/{project.screenshots.length}</div>
                <div className="flex gap-2">
                  <button onClick={() => setLightbox((s) => ({ ...s, idx: (s.idx - 1 + project.screenshots.length) % project.screenshots.length }))} className="px-3 py-1 rounded bg-gray-100 dark:bg-[#17212a]">Prev</button>
                  <button onClick={() => setLightbox((s) => ({ ...s, idx: (s.idx + 1) % project.screenshots.length }))} className="px-3 py-1 rounded bg-gray-100 dark:bg-[#17212a]">Next</button>
                  <button onClick={closeLightbox} className="px-3 py-1 rounded bg-red-100 dark:bg-[#2a1720]">Close</button>
                </div>
              </div>

              <div className="p-4">
                <img src={project.screenshots[lightbox.idx]} alt="screenshot" className="w-full h-[60vh] object-contain bg-black/5 dark:bg-white/5 rounded" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
