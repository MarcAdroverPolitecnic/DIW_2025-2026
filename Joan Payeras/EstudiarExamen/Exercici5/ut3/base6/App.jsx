import './index.css'

const sections = [
  { id: "intro", title: "Introducció" },
  { id: "install", title: "Instal·lació" },
  { id: "config", title: "Configuració" },
  { id: "usage", title: "Ús bàsic" },
  { id: "components", title: "Components" },
  { id: "api", title: "API Reference" },
]

const codeExample = `@import "tailwindcss";

@theme {
  --color-brand: #6366F1;
}

@layer base {
  body {
    font-family: system-ui;
  }
}`

const tableData = [
  { prop: "color", type: "string", default: "primary", description: "Color del component" },
  { prop: "size", type: "sm | md | lg", default: "md", description: "Mida del component" },
  { prop: "disabled", type: "boolean", default: "false", description: "Deshabilita el component" },
  { prop: "onClick", type: "function", default: "-", description: "Funció a executar al clic" },
]

function App() {
  return (
    <div>
      <p>Comença a crear la teva pàgina de documentació aquí!</p>
    </div>
  )
}

export default App

