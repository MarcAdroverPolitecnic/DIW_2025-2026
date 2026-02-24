import './index.css'

const sections = [
  { id: "intro", title: "Introducció", active: true },
  { id: "install", title: "Instal·lació", active: false },
  { id: "config", title: "Configuració", active: false },
  { id: "usage", title: "Ús bàsic", active: false },
  { id: "components", title: "Components", active: false },
  { id: "api", title: "API Reference", active: false },
]

const codeExample = `@import "tailwindcss";

@theme {
  --color-brand: #6366F1;
  --font-sans: "Inter", sans-serif;
}

@layer base {
  body {
    font-family: var(--font-sans);
  }
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
}

@layer components {
  .btn {
    padding: 0.5rem 1rem;
    background: var(--color-brand);
    border-radius: 0.5rem;
  }
}`

const tableData = [
  { prop: "color", type: "string", default: "primary", description: "Color del component" },
  { prop: "size", type: "sm | md | lg", default: "md", description: "Mida del component" },
  { prop: "disabled", type: "boolean", default: "false", description: "Deshabilita el component" },
  { prop: "onClick", type: "function", default: "-", description: "Funció a executar al clic" },
]

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-sidebar bg-sidebar border-r border-border p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-brand">DocsTailwind</h1>
        <p className="text-sm text-text-muted mt-1">v4.0.0</p>
      </div>
      <nav className="space-y-1">
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={section.active ? "nav-link nav-link-active" : "nav-link"}
          >
            {section.title}
          </a>
        ))}
      </nav>
      <div className="mt-8 pt-8 border-t border-border">
        <p className="text-xs text-text-light mb-3">Recursos</p>
        <a href="#" className="nav-link text-sm">GitHub</a>
        <a href="#" className="nav-link text-sm">Discord</a>
      </div>
    </aside>
  )
}

function Header() {
  return (
    <header className="sticky top-0 bg-bg/80 backdrop-blur border-b border-border px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <input 
          type="text" 
          placeholder="Cercar documentació..." 
          className="w-64 px-4 py-2 text-sm bg-bg-alt border border-border rounded-md focus:outline-none focus:border-brand"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="btn btn-secondary">GitHub</button>
        <button className="btn btn-primary">Descarregar</button>
      </div>
    </header>
  )
}

function MainContent() {
  return (
    <main className="p-8 max-w-4xl">
      <div className="mb-6">
        <span className="badge">Nou</span>
      </div>
      
      <h1>Introducció a Tailwind CSS 4.0</h1>
      
      <p>
        Tailwind CSS 4.0 introdueix una nova forma de personalitzar els estils mitjançant 
        les directives <code>@theme</code> i <code>@layer</code>. Aquesta guia et mostrarà 
        com utilitzar aquestes eines per crear dissenys consistents i mantenibles.
      </p>

      <div className="alert alert-info">
        Aquesta documentació està actualitzada per a Tailwind CSS versió 4.0 o superior.
      </div>

      <h2>Característiques principals</h2>
      
      <ul>
        <li>Sistema de variables CSS natiu amb <code>@theme</code></li>
        <li>Organització d'estils amb <code>@layer</code></li>
        <li>Utilitats personalitzades amb <code>@utility</code></li>
        <li>Millor rendiment i menor mida de bundle</li>
      </ul>

      <h2>Instal·lació</h2>
      
      <p>
        Pots instal·lar Tailwind CSS mitjançant npm o yarn:
      </p>

      <pre><code>npm install tailwindcss @tailwindcss/vite</code></pre>

      <h2>Configuració bàsica</h2>
      
      <p>
        Aquí tens un exemple de configuració que utilitza <code>@theme</code> i <code>@layer</code>:
      </p>

      <pre><code>{codeExample}</code></pre>

      <div className="alert alert-warning">
        Recorda que els <code>@import</code> de fonts externes han d'anar abans del 
        <code>@import "tailwindcss"</code>.
      </div>

      <h2>API Reference</h2>
      
      <p>
        La següent taula mostra les propietats disponibles per al component Button:
      </p>

      <table>
        <thead>
          <tr>
            <th>Propietat</th>
            <th>Tipus</th>
            <th>Per defecte</th>
            <th>Descripció</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td><code>{row.prop}</code></td>
              <td><code>{row.type}</code></td>
              <td><code>{row.default}</code></td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Components disponibles</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="card">
          <h3 className="mt-0">Botons</h3>
          <p>Components de botó amb diferents variants.</p>
          <div className="flex gap-2 mt-4">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
          </div>
        </div>
        <div className="card">
          <h3 className="mt-0">Badges</h3>
          <p>Etiquetes per a marcar contingut.</p>
          <div className="flex gap-2 mt-4">
            <span className="badge">Default</span>
            <span className="badge bg-success">Success</span>
            <span className="badge bg-warning">Warning</span>
          </div>
        </div>
      </div>

      <h2>Alertes</h2>
      
      <p>
        Les alertes permeten mostrar missatges importants als usuaris:
      </p>

      <div className="alert alert-info">
        Això és una alerta informativa.
      </div>
      <div className="alert alert-success">
        Operació completada amb èxit.
      </div>
      <div className="alert alert-warning">
        Atenció: aquesta acció pot tenir conseqüències.
      </div>
      <div className="alert alert-error">
        Error: no s'ha pogut completar l'acció.
      </div>

      <blockquote>
        "L'ús de @layer permet una organització clara dels estils i evita problemes 
        d'especificitat." - Documentació oficial
      </blockquote>

      <hr />

      <div className="flex items-center justify-between text-sm text-text-muted">
        <span>Última actualització: Gener 2025</span>
        <a href="#">Editar aquesta pàgina</a>
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      <div className="ml-sidebar">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

export default App

