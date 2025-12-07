// components/SkillsMarquee.js
import Image from "next/image"
import { useEffect, useRef } from "react"

/**
 * SkillsMarquee
 * icons: [{ src: '/icons/docker.svg', alt: 'Docker' }, ...]
 * speed: px/sec (default 60)
 * height: icon px (default 56)
 */
export default function SkillsMarquee({ icons = [], speed = 60, height = 56 }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const track = el.querySelector('.marquee-track')
    if (!track) return

    // compute a duration so the scroll speed feels consistent
    const trackWidth = track.scrollWidth || 1000
    const duration = Math.max(8, trackWidth / speed)
    track.style.setProperty('--marquee-duration', `${duration}s`)
  }, [icons, speed])

  // duplicate so it loops seamlessly
  const items = [...icons, ...icons]

  return (
    <div ref={rootRef} className="overflow-hidden select-none" aria-hidden="false">
      <div className="marquee relative">
        <div
          className="marquee-track flex items-center gap-6 whitespace-nowrap will-change-transform"
          // duration set dynamically via CSS variable
        >
          {items.map((it, idx) => (
            <div
              key={`${it.src}-${idx}`}
              className="marquee-item inline-flex flex-col items-center justify-center"
              style={{ minWidth: `${height + 64}px` }}
              tabIndex={0} // keyboard focusable
              aria-label={it.alt}
            >
              <div
                className="
                  icon-wrap p-3 rounded-xl shadow-sm
                  bg-gray-100 border border-gray-300
                  dark:bg-[#F5F7FA] dark:border-gray-400
                  transition-colors
                  "
              >
                <div className="icon-inner" style={{ width: height, height }}>
                  <Image src={it.src} alt={it.alt} width={height} height={height} className="object-contain" />
                </div>
              </div>

              <div className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-100 leading-none">
                {it.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          --marquee-duration: 20s; /* fallback */
        }

        .marquee-track {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          animation: marquee linear infinite;
          animation-duration: var(--marquee-duration);
          animation-play-state: running;
        }

        /* pause the marquee when hovering/focusing the container */
        .marquee:hover .marquee-track,
        .marquee:focus-within .marquee-track {
          animation-play-state: paused;
        }

        /* individual item hover/focus interaction */
        .marquee-item {
          cursor: pointer;
          outline: none;
        }

        /* base transition for smooth scaling */
        .icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 220ms cubic-bezier(.2,.9,.3,1), box-shadow 220ms;
        }

        /* small inner to apply shake animation */
        .icon-inner {
          display: inline-block;
          transition: transform 220ms cubic-bezier(.2,.9,.3,1);
        }

        /* hover / focus: zoom + subtle shake */
        .marquee-item:hover .icon-wrap,
        .marquee-item:focus .icon-wrap {
          transform: scale(1.06);
          box-shadow: 0 8px 22px rgba(16,24,40,0.12);
        }
        .marquee-item:hover .icon-inner,
        .marquee-item:focus .icon-inner {
          animation: shake 0.55s ease-in-out 0s 1;
        }

        /* shake keyframes (gentle) */
        @keyframes shake {
          0% { transform: translateX(0); }
          15% { transform: translateX(-4px); }
          30% { transform: translateX(3px); }
          45% { transform: translateX(-2px); }
          60% { transform: translateX(1px); }
          75% { transform: translateX(-1px); }
          100% { transform: translateX(0); }
        }

        /* marquee movement: translate by 50% because we duplicated content */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* accessibility: respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; transform: translateX(0) !important; }
          .marquee-item:hover .icon-inner,
          .marquee-item:focus .icon-inner { animation: none !important; }
          .marquee-item:hover .icon-wrap,
          .marquee-item:focus .icon-wrap { transform: none !important; box-shadow: none !important; }
        }

        /* smaller screens: slightly smaller item width */
        @media (max-width: 640px) {
          .marquee-item { min-width: ${height + 32}px !important; }
        }
      `}</style>
    </div>
  )
}
