import { ProductCard } from './ProductCard'

const products = [
    { id: 1, title: "Producte 1", description: "Descripció del producte", price: "29.99", image: "https://picsum.photos/seed/prod1/400/300" },
    { id: 2, title: "Producte 2", description: "Descripció del producte", price: "49.99", image: "https://picsum.photos/seed/prod2/400/300" },
    { id: 3, title: "Producte 3", description: "Descripció del producte", price: "19.99", image: "https://picsum.photos/seed/prod3/400/300" },
]

export function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

