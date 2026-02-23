import './index.css'

const stats = [
    { id: 1, title: "Usuaris Totals", value: "2,543", icon: "👥", change: "+12%", color: "text-primary" },
    { id: 2, title: "Ingressos", value: "45,234€", icon: "💰", change: "+8%", color: "text-success" },
    { id: 3, title: "Comandes", value: "1,234", icon: "📦", change: "+23%", color: "text-warning" },
    { id: 4, title: "Visites", value: "12,543", icon: "📊", change: "+18%", color: "text-secondary" },
]

const menuItems = [
    { id: 1, name: "Dashboard", icon: "🏠", active: true },
    { id: 2, name: "Usuaris", icon: "👥" },
    { id: 3, name: "Productes", icon: "📦" },
    { id: 4, name: "Comandes", icon: "🛒" },
    { id: 5, name: "Estadístiques", icon: "📊" },
    { id: 6, name: "Configuració", icon: "⚙️" },
]

const recentActivity = [
    { id: 1, action: "Nova comanda #1234", time: "Fa 5 min", icon: "🛒" },
    { id: 2, action: "Usuari registrat", time: "Fa 12 min", icon: "👤" },
    { id: 3, action: "Producte actualitzat", time: "Fa 25 min", icon: "📦" },
    { id: 4, action: "Pagament rebut", time: "Fa 1 hora", icon: "💳" },
    { id: 5, action: "Comentari nou", time: "Fa 2 hores", icon: "💬" },
]

const tableData = [
    { id: "#1234", client: "Maria García", product: "Càmera Pro", amount: "299€", status: "Completat", statusColor: "text-success" },
    { id: "#1235", client: "Joan Martí", product: "Auriculars BT", amount: "89€", status: "Pendent", statusColor: "text-warning" },
    { id: "#1236", client: "Anna López", product: "Monitor 4K", amount: "449€", status: "Enviat", statusColor: "text-secondary" },
    { id: "#1237", client: "Pere Soler", product: "Teclat Mecànic", amount: "159€", status: "Completat", statusColor: "text-success" },
]

function App() {
    return (
        <div className="min-h-screen flex bg-light">

            {/* --- SIDEBAR (Part 2: Desktop visible, Mobile hidden) --- */}
            <aside className="hidden lg:flex w-64 bg-sidebar min-h-screen fixed left-0 top-0 flex-col text-white z-50">
                <div className="p-6 flex items-center gap-3 border-b border-white/10">
                    <div className="w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-lg"></div>
                    <span className="text-xl font-bold tracking-tight">AdminPanel</span>
                </div>

                <nav className="flex-grow p-4 space-y-2 mt-4">
                    {menuItems.map(item => (
                        <a key={item.id} href="#" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-primary shadow-lg shadow-primary/30' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>
                            <span>{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </a>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/10">
                    <button className="flex items-center gap-4 text-gray-400 hover:text-danger transition-colors w-full px-4">
                        <span>🚪</span>
                        <span className="font-medium">Tancar sessió</span>
                    </button>
                </div>
            </aside>

            {/* --- CONTINGUT PRINCIPAL (Part 2: Marge esquerra en lg) --- */}
            <main className="flex-grow lg:ml-64 flex flex-col">

                {/* HEADER (Part 2: Fixed top, Button only in mobile) */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">☰</button>
                        <h1 className="text-xl font-bold text-dark">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative p-2 text-warning">🔔 <span className="absolute top-1 right-1 bg-danger text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">3</span></div>
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
                            <span className="hidden sm:block text-sm font-semibold">Admin</span>
                        </div>
                    </div>
                </header>

                {/* DASHBOARD CONTENT */}
                <div className="p-6 space-y-6">

                    {/* WIDGETS D'ESTADÍSTIQUES (Part 2: Responsive Grid) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map(stat => (
                            <div key={stat.id} className="bg-card p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
                                <div>
                                    <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
                                    <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                                    <span className={`text-xs font-bold ${stat.color}`}>{stat.change} vs mes anterior</span>
                                </div>
                                <div className="p-3 bg-light rounded-xl text-2xl">{stat.icon}</div>
                            </div>
                        ))}
                    </div>

                    {/* GRÀFIC I ACTIVITAT (Part 2: Asymmetric Grid 2/3 and 1/3) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Gràfic (Simulat) */}
                        <div className="lg:col-span-2 bg-card p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[300px] flex flex-col">
                            <h3 className="font-bold mb-6">Vendes Mensuals</h3>
                            <div className="flex-grow flex items-center justify-center bg-light/50 rounded-xl border-2 border-dashed border-gray-200">
                                <div className="text-center text-gray-400">
                                    <div className="text-4xl mb-2">📈</div>
                                    <p className="text-sm">Gràfic de vendes</p>
                                </div>
                            </div>
                        </div>

                        {/* Activitat Recent */}
                        <div className="bg-card p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold mb-6">Activitat Recent</h3>
                            <div className="space-y-6">
                                {recentActivity.map(activity => (
                                    <div key={activity.id} className="flex gap-4">
                                        <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center flex-shrink-0">{activity.icon}</div>
                                        <div>
                                            <p className="text-sm font-bold">{activity.action}</p>
                                            <p className="text-xs text-gray-400">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* TAULA (Part 2: Horizontal scroll) */}
                    <div className="bg-card rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="font-bold">Comandes Recents</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-light/50 text-gray-500 text-sm uppercase">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">ID</th>
                                    <th className="px-6 py-4 font-semibold">Client</th>
                                    <th className="px-6 py-4 font-semibold">Producte</th>
                                    <th className="px-6 py-4 font-semibold">Import</th>
                                    <th className="px-6 py-4 font-semibold">Estat</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                {tableData.map(row => (
                                    <tr key={row.id} className="hover:bg-light/30 transition-colors">
                                        <td className="px-6 py-4 font-medium">{row.id}</td>
                                        <td className="px-6 py-4">{row.client}</td>
                                        <td className="px-6 py-4 text-gray-500">{row.product}</td>
                                        <td className="px-6 py-4 font-bold">{row.amount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`font-bold ${row.statusColor}`}>{row.status}</span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default App