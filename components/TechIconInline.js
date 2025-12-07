// components/TechIconInline.js
export default function TechIconInline({ name, size = 18 }) {
  const s = size
  const common = { width: s, height: s, className: "inline-block align-middle" }

  switch ((name || "").toLowerCase()) {
    case "docker":
      return (
        <svg {...common} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="16" y="256" width="96" height="80" rx="8" fill="#2496ED" />
          <rect x="120" y="256" width="96" height="80" rx="8" fill="#2496ED" />
          <rect x="224" y="256" width="96" height="80" rx="8" fill="#2496ED" />
          <path d="M416 320c0 0-24-40-112-40s-112 40-112 40 14 64 112 64 112-64 112-64z" fill="#2496ED"/>
        </svg>
      )
    case "kubernetes":
    case "k8s":
      return (
        <svg {...common} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#326CE5" d="M12 2l2 3 3 1-1 3 2 2-3 2-1 3-2-2-2 2-1-3-3-2 2-2-1-3 3-1 2-3z"/>
        </svg>
      )
    case "aws":
      return (
        <svg {...common} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M2 18s4-4 10-4 10 4 10 4" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
        </svg>
      )
    case "python":
      return (
        <svg {...common} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M5 3h7v3H7v2H5V3z" fill="#3776AB"/>
          <path d="M19 21h-7v-3h5v-2h2v5z" fill="#FFD43B"/>
        </svg>
      )
    case "terraform":
      return (
        <svg {...common} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4 4l8 4 8-4v14l-8 4-8-4z" fill="#7B42BC"/>
        </svg>
      )
    case "github":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.8 3.1 8.9 7.4 10.3.5.1.7-.2.7-.5 0-.3-.01-1-.01-2-3 .6-3.7-1.4-3.7-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.07-.7.07-.7 1.1.08 1.7 1.1 1.7 1.1 1 .6 2.6 1.2 3.2.9.1-.7.4-1.1.7-1.4-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1 0 0 1-.1 2.6.3 1.6-.4 2.6-.3 2.6-.3 2.1-1.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.1-2.5 5-4.9 5.3.4.3.6.9.6 1.8 0 1.3 0 2.3-.01 2.6 0 .3.2.6.7.5 4.3-1.4 7.4-5.5 7.4-10.3C23.2 5.4 18.3.5 12 .5z"/>
        </svg>
      )
    default:
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#94A3B8" />
        </svg>
      )
  }
}
