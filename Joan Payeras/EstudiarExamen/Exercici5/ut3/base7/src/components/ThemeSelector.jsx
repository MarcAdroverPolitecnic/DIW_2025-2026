const themes = ['blue', 'purple', 'green']

export function ThemeSelector({ currentTheme, onSelect }) {
    return (
        <div>
            {themes.map(theme => (
                <button key={theme} onClick={() => onSelect(theme)}>
                    {theme}
                </button>
            ))}
        </div>
    )
}

