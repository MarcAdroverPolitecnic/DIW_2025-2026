import { useState, useEffect } from 'react'

export function useTheme() {
    // Recuperar preferències de localStorage o valors per defecte
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('dark-mode') === 'true'
    })
    const [colorTheme, setColorTheme] = useState(() => {
        return localStorage.getItem('color-theme') || 'blue'
    })

    useEffect(() => {
        // Aplicar/treure classe .dark al body o html
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('dark-mode', isDark)
    }, [isDark])

    useEffect(() => {
        // Gestionar classes de tema (theme-blue, theme-green, etc.)
        const root = document.documentElement
        root.classList.forEach(className => {
            if (className.startsWith('theme-')) root.classList.remove(className)
        })
        root.classList.add(`theme-${colorTheme}`)
        localStorage.setItem('color-theme', colorTheme)
    }, [colorTheme])

    return {
        isDark,
        colorTheme,
        toggleDark: () => setIsDark(!isDark),
        setColorTheme
    }
}