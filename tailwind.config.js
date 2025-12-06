module.exports = {
darkMode: 'class',
content: [
'./pages/**/*.{js,jsx}',
'./components/**/*.{js,jsx}'
],
theme: {
extend: {
colors: {
    darkBg: "#111827",      // deep slate
    darkCard: "#1f2937",    // slate-800
    darkBorder: "#374151",  // slate-700
},
animation: {
float: 'float 4s ease-in-out infinite'
},
keyframes: {
float: {
'0%,100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
}
}
},
},
plugins: [],
}