import { useState, useEffect } from 'react'

export function useTheme() {
    const [isDark, setIsDark] = useState(false)
    const [colorTheme, setColorTheme] = useState('blue')

    return {
        isDark,
        colorTheme,
        toggleDark: () => setIsDark(!isDark),
        setColorTheme
    }
}

