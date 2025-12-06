import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'


export default function ThemeToggle() {
const [mode, setMode] = useState('light')


useEffect(() => {
const saved = localStorage.getItem('theme') || 'light'
setMode(saved)
document.documentElement.classList.toggle('dark', saved === 'dark')
}, [])


const toggle = () => {
const next = mode === 'light' ? 'dark' : 'light'
setMode(next)
localStorage.setItem('theme', next)
document.documentElement.classList.toggle('dark', next === 'dark')
}


return (
<button
  onClick={toggle}
  className="
    p-2 rounded-lg shadow 
    transition-colors duration-300
    bg-gray-900 dark:bg-white       /* background color */
    text-white dark:text-yellow-400 /* icon color */
    border border-gray-700 dark:border-gray-300
  "
>
  {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
</button>
)
}