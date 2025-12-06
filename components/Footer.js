export default function Footer() {
return (
<footer className="mt-20 py-8 text-center text-sm text-gray-600">
<div className="container mx-auto px-6">
© {new Date().getFullYear()} Rajesh Gajengi. Built with Next.js & Tailwind.
</div>
</footer>
)
}