import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 80, className = "" }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let mounted = true;

    function type() {
      if (!mounted) return;

      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
        setTimeout(type, speed);
      } else {
        setDone(true);
      }
    }

    type();
    return () => {
      mounted = false;
    };
  }, [text, speed]);

  return (
    <span className={`inline ${className}`}>
      {display}
      {done ? <Dots /> : <span className="cursor">|</span>}
    </span>
  );
}

/* Continuous 3-dot typing animation */
function Dots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % 4; // 0,1,2,3 dots
      setDots(".".repeat(i));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span>{dots}</span>;
}
