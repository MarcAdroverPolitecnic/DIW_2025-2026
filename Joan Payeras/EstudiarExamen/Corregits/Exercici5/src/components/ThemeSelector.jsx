const themes = [
    { id: 'blue', color: '#3B82F6', label: 'Blau' },
    { id: 'purple', color: '#8B5CF6', label: 'Porpra' },
    { id: 'green', color: '#10B981', label: 'Verd' }
]

export function ThemeSelector({ currentTheme, onSelect }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-[--color-muted]">Tema:</span>
            <div className="flex gap-2">
                {themes.map(theme => (
                    <button
                        key={theme.id}
                        onClick={() => onSelect(theme.id)}
                        className={`theme-btn ${currentTheme === theme.id ? 'active' : ''}`}
                        style={{ backgroundColor: theme.color }}
                        aria-label={`Tema ${theme.label}`}
                        title={theme.label}
                    />
                ))}
            </div>
        </div>
    )
}

