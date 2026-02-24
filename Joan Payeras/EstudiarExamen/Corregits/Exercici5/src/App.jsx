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
            <header className="sticky top-0 z-10 bg-[--color-card] border-b border-[--color-border] transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold text-[--color-primary]">
                            TechStore
                        </h1>
                        <div className="flex items-center gap-6">
                            <ThemeSelector 
                                currentTheme={colorTheme} 
                                onSelect={setColorTheme} 
                            />
                            <ThemeToggle 
                                isDark={isDark} 
                                onToggle={toggleDark} 
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Dashboard />
            </main>

            <footer className="bg-[--color-card] border-t border-[--color-border] mt-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-[--color-muted]">
                            2025 TechStore. Tots els drets reservats.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-[--color-muted] hover:text-[--color-primary] transition-colors">
                                Termes
                            </a>
                            <a href="#" className="text-[--color-muted] hover:text-[--color-primary] transition-colors">
                                Privacitat
                            </a>
                            <a href="#" className="text-[--color-muted] hover:text-[--color-primary] transition-colors">
                                Contacte
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App

