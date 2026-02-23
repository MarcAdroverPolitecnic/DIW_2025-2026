import './index.css'

const sections = [
    { id: "intro", title: "Introducció" },
    { id: "install", title: "Instal·lació" },
    { id: "config", title: "Configuració" },
    { id: "usage", title: "Ús bàsic" },
    { id: "components", title: "Components" },
    { id: "api", title: "API Reference" },
]

function App() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-bg-alt border-r border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto">
                <div className="text-2xl font-bold text-brand mb-8 flex items-center gap-2">
                    <span className="w-8 h-8 bg-brand rounded-lg"></span> DocuWiki
                </div>
                <nav className="space-y-1">
                    {sections.map((s, i) => (
                        <a key={s.id} href={`#${s.id}`} className={`nav-link ${i === 0 ? 'nav-link-active' : ''}`}>
                            {s.title}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto p-12">
                <header id="intro">
                    <span className="badge bg-brand/10 text-brand mb-2 inline-block">v4.0 Alpha</span>
                    <h1>Documentació Tècnica</h1>
                    <p>Benvingut a la guia oficial. Aquí trobaràs tot el necessari per configurar el teu projecte utilitzant les darreres funcionalitats de <code>@theme</code> i <code>@layer</code>.</p>
                </header>

                <hr />

                <section id="install">
                    <h2>Instal·lació Ràpida</h2>
                    <p>Per començar, instal·la el paquet des de npm i configura el teu fitxer CSS principal:</p>
                    <pre>
                        <code>{`npm install tailwindcss@next\n@import "tailwindcss";`}</code>
                    </pre>
                    <div className="alert alert-info">
                        <strong>Nota:</strong> Recorda que la versió 4.0 ja no requereix un fitxer JavaScript de configuració per defecte.
                    </div>
                </section>

                <section id="components">
                    <h2>Components de UI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="card">
                            <h3 className="mt-0">Botons Reutilitzables</h3>
                            <div className="flex gap-3">
                                <button className="btn btn-primary">Primary</button>
                                <button className="btn btn-secondary">Secondary</button>
                            </div>
                        </div>
                        <div className="card">
                            <h3 className="mt-0">Estats d'Alerta</h3>
                            <div className="alert alert-success !mb-0 text-sm">Operació completada!</div>
                        </div>
                    </div>
                </section>

                <section id="api">
                    <h2>API Reference</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Propietat</th>
                            <th>Tipus</th>
                            <th>Defecte</th>
                            <th>Descripció</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><code>color</code></td>
                            <td>string</td>
                            <td>brand</td>
                            <td>Color principal del tema</td>
                        </tr>
                        <tr>
                            <td><code>radius</code></td>
                            <td>size</td>
                            <td>0.75rem</td>
                            <td>Arrodoniment de les cantonades</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

                <blockquote>
                    "El disseny no és només el que es veu, sinó com funciona." - Una wiki ben estilitzada facilita la feina de tothom.
                </blockquote>
            </main>
        </div>
    )
}

export default App