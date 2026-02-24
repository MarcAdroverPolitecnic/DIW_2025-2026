import { ProductCard } from './ProductCard'

const products = [
    { id: 1, title: "Auriculars sense fils", description: "Auriculars Bluetooth amb cancel·lació de soroll activa i bateria de llarga durada.", price: "129.99", image: "https://picsum.photos/seed/headphones/400/300" },
    { id: 2, title: "Rellotge intel·ligent", description: "Monitorització de salut, GPS integrat i resistència a l'aigua.", price: "249.99", image: "https://picsum.photos/seed/smartwatch/400/300" },
    { id: 3, title: "Altaveu portàtil", description: "So de 360 graus amb baix potent i 20 hores de reproducció.", price: "79.99", image: "https://picsum.photos/seed/speaker/400/300" },
    { id: 4, title: "Càmera d'acció", description: "Gravació 4K a 60fps amb estabilització avançada.", price: "299.99", image: "https://picsum.photos/seed/camera/400/300" },
    { id: 5, title: "Teclat mecànic", description: "Switches Cherry MX, retroil·luminació RGB personalitzable.", price: "159.99", image: "https://picsum.photos/seed/keyboard/400/300" },
    { id: 6, title: "Monitor corb", description: "Pantalla de 34 polzades QHD amb 144Hz per a gaming.", price: "449.99", image: "https://picsum.photos/seed/monitor/400/300" },
]

const stats = [
    { label: "Productes", value: "1,234" },
    { label: "Vendes", value: "5,678" },
    { label: "Clients", value: "890" },
    { label: "Ingressos", value: "45,670 EUR" },
]

export function Dashboard() {
    return (
        <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-[--color-foreground] mb-6">
                    Resum
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map(stat => (
                        <div key={stat.label} className="stat-card">
                            <p className="text-sm text-[--color-muted] mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold text-[--color-primary]">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[--color-foreground]">
                        Productes
                    </h2>
                    <button className="btn-secondary text-sm">
                        Veure tots
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    )
}

