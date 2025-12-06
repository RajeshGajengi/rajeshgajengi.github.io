export default function Header() {
return (
<header className="
  bg-white dark:bg-darkCard 
  border-b border-gray-200 dark:border-darkBorder
  shadow-sm transition-colors
">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<h1 className="text-xl font-semibold text-gray-900 dark:text-slate-100">Rajesh Gajengi</h1>
<nav className="space-x-4 text-sm text-gray-700 dark:text-slate-300">
<a href="#projects" className="hover:underline">Projects</a>
<a href="#about" className="hover:underline">About</a>
<a href="#contact" className="hover:underline">Contact</a>
</nav>
</div>
</header>
)
}