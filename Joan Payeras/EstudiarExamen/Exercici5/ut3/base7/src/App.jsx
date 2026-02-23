import './styles/themes.css'
import './styles/components.css'
import { useTheme } from './hooks/useTheme'
import { ThemeToggle } from './components/ThemeToggle'
import { ThemeSelector } from './components/ThemeSelector'
import { Dashboard } from './components/Dashboard'

function App() {
    const { isDark, colorTheme, toggleDark, setColorTheme } = useTheme()

    return (
        <div>
            <ThemeToggle isDark={isDark} onToggle={toggleDark} />
            <ThemeSelector currentTheme={colorTheme} onSelect={setColorTheme} />
            <Dashboard />
        </div>
    )
}

export default App

