import { useState, useEffect } from 'react'

export function useTheme() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('darkMode')
            if (saved !== null) return JSON.parse(saved)
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    const [colorTheme, setColorTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('colorTheme') || 'blue'
        }
        return 'blue'
    })

    useEffect(() => {
        const root = document.documentElement
        
        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        
        localStorage.setItem('darkMode', JSON.stringify(isDark))
    }, [isDark])

    useEffect(() => {
        const root = document.documentElement
        
        root.classList.remove('theme-blue', 'theme-purple', 'theme-green')
        root.classList.add(`theme-${colorTheme}`)
        
        localStorage.setItem('colorTheme', colorTheme)
    }, [colorTheme])

    const toggleDark = () => setIsDark(prev => !prev)

    return {
        isDark,
        colorTheme,
        toggleDark,
        setColorTheme
    }
}

