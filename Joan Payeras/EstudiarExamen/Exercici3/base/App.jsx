import './index.css'

const stats = [
  { id: 1, title: "Usuaris Totals", value: "2,543", icon: "👥", change: "+12%" },
  { id: 2, title: "Ingressos", value: "45,234€", icon: "💰", change: "+8%" },
  { id: 3, title: "Comandes", value: "1,234", icon: "📦", change: "+23%" },
  { id: 4, title: "Visites", value: "12,543", icon: "📊", change: "+18%" },
]

const menuItems = [
  { id: 1, name: "Dashboard", icon: "🏠" },
  { id: 2, name: "Usuaris", icon: "👥" },
  { id: 3, name: "Productes", icon: "📦" },
  { id: 4, name: "Comandes", icon: "🛒" },
  { id: 5, name: "Estadístiques", icon: "📊" },
  { id: 6, name: "Configuració", icon: "⚙️" },
]

const recentActivity = [
  { id: 1, action: "Nova comanda #1234", time: "Fa 5 min" },
  { id: 2, action: "Usuari registrat", time: "Fa 12 min" },
  { id: 3, action: "Producte actualitzat", time: "Fa 25 min" },
  { id: 4, action: "Pagament rebut", time: "Fa 1 hora" },
  { id: 5, action: "Comentari nou", time: "Fa 2 hores" },
]

const tableData = [
  { id: "#1234", client: "Maria García", product: "Càmera Pro", amount: "299€", status: "Completat" },
  { id: "#1235", client: "Joan Martí", product: "Auriculars BT", amount: "89€", status: "Pendent" },
  { id: "#1236", client: "Anna López", product: "Monitor 4K", amount: "449€", status: "Enviat" },
  { id: "#1237", client: "Pere Soler", product: "Teclat Mecànic", amount: "159€", status: "Completat" },
]

function App() {
  return (
    <div>
      <p>Comença a crear el teu dashboard aquí!</p>
    </div>
  )
}

export default App

