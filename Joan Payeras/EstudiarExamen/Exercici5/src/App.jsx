import './styles/themes.css'
import './styles/components.css'
import { useTheme } from './hooks/useTheme'
import { ThemeToggle } from './components/ThemeToggle'
import { ThemeSelector } from './components/ThemeSelector'
import { Dashboard } from './components/Dashboard'

function App() {
    const { isDark, colorTheme, toggleDark, setColorTheme } = useTheme()

    return (
        <div className="min-h-screen bg-[--color-background] text-[--color-foreground] transition-colors duration-300">
            <header className="p-4 flex justify-between items-center border-b border-[--color-border]">
                <h1 className="text-xl font-bold">Tema Actual: {colorTheme}</h1>
                <div className="flex gap-4">
                    <ThemeSelector currentTheme={colorTheme} onSelect={setColorTheme} />
                    <ThemeToggle isDark={isDark} onToggle={toggleDark} />
                </div>
            </header>
            <main className="p-8">
                <Dashboard />
            </main>
        </div>
    )
}

export default App