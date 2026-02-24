import './index.css'

const stats = [
  { id: 1, title: "Usuaris Totals", value: "2,543", icon: "👥", change: "+12%", color: "bg-primary" },
  { id: 2, title: "Ingressos", value: "45,234€", icon: "💰", change: "+8%", color: "bg-success" },
  { id: 3, title: "Comandes", value: "1,234", icon: "📦", change: "+23%", color: "bg-warning" },
  { id: 4, title: "Visites", value: "12,543", icon: "📊", change: "+18%", color: "bg-secondary" },
]

const menuItems = [
  { id: 1, name: "Dashboard", icon: "🏠", active: true },
  { id: 2, name: "Usuaris", icon: "👥", active: false },
  { id: 3, name: "Productes", icon: "📦", active: false },
  { id: 4, name: "Comandes", icon: "🛒", active: false },
  { id: 5, name: "Estadístiques", icon: "📊", active: false },
  { id: 6, name: "Configuració", icon: "⚙️", active: false },
]

const recentActivity = [
  { id: 1, action: "Nova comanda #1234", time: "Fa 5 min", type: "order" },
  { id: 2, action: "Usuari registrat", time: "Fa 12 min", type: "user" },
  { id: 3, action: "Producte actualitzat", time: "Fa 25 min", type: "product" },
  { id: 4, action: "Pagament rebut", time: "Fa 1 hora", type: "payment" },
  { id: 5, action: "Comentari nou", time: "Fa 2 hores", type: "comment" },
]

const tableData = [
  { id: "#1234", client: "Maria García", product: "Càmera Pro", amount: "299€", status: "Completat" },
  { id: "#1235", client: "Joan Martí", product: "Auriculars BT", amount: "89€", status: "Pendent" },
  { id: "#1236", client: "Anna López", product: "Monitor 4K", amount: "449€", status: "Enviat" },
  { id: "#1237", client: "Pere Soler", product: "Teclat Mecànic", amount: "159€", status: "Completat" },
]

function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 bg-sidebar text-white">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <span className="text-3xl">📊</span>
        <span className="text-xl font-bold">AdminPanel</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map(item => (
          <a
            key={item.id}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              item.active 
                ? 'bg-primary text-white' 
                : 'text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-white/10">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-danger transition-colors">
          <span className="text-xl">🚪</span>
          <span>Tancar sessió</span>
        </a>
      </div>
    </aside>
  )
}

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 bg-card shadow-sm z-10">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-2xl text-dark hover:text-primary transition-colors">
            ☰
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-dark">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative text-2xl text-gray-500 hover:text-primary transition-colors">
            🔔
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger text-white text-xs rounded-full flex items-center justify-center">3</span>
          </button>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="text-dark font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}

function StatCard({ stat }) {
  return (
    <div className="bg-card rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{stat.title}</p>
          <p className="text-2xl md:text-3xl font-bold text-dark mt-1">{stat.value}</p>
          <p className="text-success text-sm mt-2">{stat.change} vs mes anterior</p>
        </div>
        <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
          {stat.icon}
        </div>
      </div>
    </div>
  )
}

function ChartPlaceholder() {
  return (
    <div className="bg-card rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-dark mb-4">Vendes Mensuals</h3>
      <div className="h-64 bg-light rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-400">
          <span className="text-5xl block mb-2">📈</span>
          <p>Gràfic de vendes</p>
        </div>
      </div>
    </div>
  )
}

function ActivityCard() {
  return (
    <div className="bg-card rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-dark mb-4">Activitat Recent</h3>
      <div className="space-y-4">
        {recentActivity.map(activity => (
          <div key={activity.id} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center text-lg">
              {activity.type === 'order' && '🛒'}
              {activity.type === 'user' && '👤'}
              {activity.type === 'product' && '📦'}
              {activity.type === 'payment' && '💳'}
              {activity.type === 'comment' && '💬'}
            </div>
            <div className="flex-1">
              <p className="text-dark font-medium">{activity.action}</p>
              <p className="text-gray-400 text-sm">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DataTable() {
  const statusColors = {
    'Completat': 'bg-success/20 text-success',
    'Pendent': 'bg-warning/20 text-warning',
    'Enviat': 'bg-secondary/20 text-secondary',
  }

  return (
    <div className="bg-card rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-dark mb-4">Comandes Recents</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-500 font-medium">ID</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Client</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Producte</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Import</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Estat</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(row => (
              <tr key={row.id} className="border-b border-gray-100 hover:bg-light/50 transition-colors">
                <td className="py-4 px-4 font-medium text-dark">{row.id}</td>
                <td className="py-4 px-4 text-gray-600">{row.client}</td>
                <td className="py-4 px-4 text-gray-600">{row.product}</td>
                <td className="py-4 px-4 font-medium text-dark">{row.amount}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[row.status]}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Sidebar />
      <Header />
      <main className="lg:ml-64 pt-20 p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6">
          {stats.map(stat => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="lg:col-span-2">
            <ChartPlaceholder />
          </div>
          <div className="lg:col-span-1">
            <ActivityCard />
          </div>
        </div>
        <DataTable />
      </main>
    </div>
  )
}

export default App

