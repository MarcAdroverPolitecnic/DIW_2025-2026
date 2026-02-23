import './index.css'

const stats = [
    { id: 1, title: "Usuaris Totals", value: "2,543", icon: "👥", change: "+12%", color: "bg-indigo-500" },
    { id: 2, title: "Ingressos", value: "45,234€", icon: "💰", change: "+8%", color: "bg-emerald-500" },
    { id: 3, title: "Comandes", value: "1,234", icon: "📦", change: "+23%", color: "bg-orange-500" },
    { id: 4, title: "Visites", value: "12,543", icon: "📊", change: "+18%", color: "bg-sky-500" },
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
    { id: "#1234", client: "Maria García", product: "Càmera Pro", amount: "299€", status: "Completat", color: "text-emerald-500" },
    { id: "#1235", client: "Joan Martí", product: "Auriculars BT", amount: "89€", status: "Pendent", color: "text-orange-500" },
    { id: "#1236", client: "Anna López", product: "Monitor 4K", amount: "449€", status: "Enviat", color: "text-sky-500" },
    { id: "#1237", client: "Pere Soler", product: "Teclat Mecànic", amount: "159€", status: "Completat", color: "text-emerald-500" },
]

function App() {
    return (
        <div className="flex min-h-screen bg-gray-50 font-sans text-slate-900">

            {/* SIDEBAR: Part 2 - Hidden on mobile, fixed width 64 on desktop */}
            <aside className="hidden lg:flex flex-col w-64 bg-[#0f172a] text-gray-400 fixed h-full z-20">
                <div className="p-6 flex items-center gap-3 text-white font-bold text-xl">
                    <span className="p-2 bg-gradient-to-tr from-pink-500 to-indigo-500 rounded-lg">📊</span>
                    AdminPanel
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    {menuItems.map((item) => (
                        <a key={item.id} href="#" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${item.active ? 'bg-indigo-600 text-white' : 'hover:bg-gray-800'}`}>
                            <span>{item.icon}</span> {item.name}
                        </a>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <button className="flex items-center gap-3 p-3 w-full hover:text-white transition-colors">
                        🚪 Tancar sessió
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT: lg:ml-64 to offset the sidebar */}
            <main className="flex-1 lg:ml-64 w-full">

                {/* HEADER: Fixed top-0 */}
                <header className="fixed top-0 right-0 left-0 lg:left-64 bg-white border-b z-10 p-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden text-2xl">☰</button>
                        <h1 className="text-xl font-bold">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="relative">🔔 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">3</span></span>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs">A</div>
                            <span className="hidden md:block text-sm font-medium">Admin</span>
                        </div>
                    </div>
                </header>

                {/* CONTINGUT AMB PADDING SUPERIOR PEL HEADER */}
                <div className="p-6 mt-16 space-y-6">

                    {/* WIDGETS D'ESTADÍSTIQUES (Part 2: 1 col mòbil, 2 tablet, 4 desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">{stat.title}</p>
                                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                                    <p className="text-emerald-500 text-xs mt-1 font-medium">{stat.change} vs mes anterior</p>
                                </div>
                                <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner`}>
                                    {stat.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* GRÀFIC I ACTIVITAT (Part 2: 2/3 i 1/3 ample en desktop) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* GRÀFIC */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[300px]">
                            <h3 className="font-bold mb-10">Vendes Mensuals</h3>
                            <div className="flex flex-col items-center justify-center text-gray-400 py-12">
                                <div className="text-5xl mb-2">📈</div>
                                <p>Gràfic de vendes</p>
                            </div>
                        </div>

                        {/* ACTIVITAT RECENT */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold mb-6">Activitat Recent</h3>
                            <div className="space-y-6">
                                {recentActivity.map((act) => (
                                    <div key={act.id} className="flex gap-4">
                                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-sm">
                                            {act.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">{act.action}</p>
                                            <p className="text-xs text-gray-400">{act.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* TAULA (Part 2: overflow-x-auto per scroll horitzontal) */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <h3 className="font-bold">Comandes Recents</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-medium">ID</th>
                                    <th className="px-6 py-4 font-medium">Client</th>
                                    <th className="px-6 py-4 font-medium">Producte</th>
                                    <th className="px-6 py-4 font-medium">Import</th>
                                    <th className="px-6 py-4 font-medium">Estat</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                {tableData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium">{row.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{row.client}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{row.product}</td>
                                        <td className="px-6 py-4 text-sm font-bold">{row.amount}</td>
                                        <td className={`px-6 py-4 text-sm font-bold ${row.color}`}>{row.status}</td>
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