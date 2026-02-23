export function ProductCard({ product }) {
    return (
        <div className="card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
        </div>
    )
}

