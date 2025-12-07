// pages/_app.js
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    // <- Global wrapper that responds to `dark` on <html>
    <div className="min-h-screen bg-white dark:bg-darkBg transition-colors duration-300">
      <Component {...pageProps} />
    </div>
  )
}
