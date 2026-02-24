export function ThemeToggle({ isDark, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className="relative w-14 h-8 rounded-full bg-[--color-border] transition-colors duration-300 focus:outline-none"
            aria-label={isDark ? "Activar mode clar" : "Activar mode fosc"}
        >
            <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-[--color-primary] transition-all duration-300 flex items-center justify-center text-white text-xs font-bold ${
                    isDark ? 'left-7' : 'left-1'
                }`}
            >
                {isDark ? 'D' : 'L'}
            </span>
        </button>
    )
}

