export function ProductCard({ product }) {
    return (
        <div className="card">
            <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-5">
                <h3 className="text-lg font-semibold text-[--color-foreground] mb-2">
                    {product.title}
                </h3>
                <p className="text-sm text-[--color-muted] mb-4 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[--color-primary]">
                        {product.price} EUR
                    </span>
                    <button className="btn-primary text-sm">
                        Afegir
                    </button>
                </div>
            </div>
        </div>
    )
}

