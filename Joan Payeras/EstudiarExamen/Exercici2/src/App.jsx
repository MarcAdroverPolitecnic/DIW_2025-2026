import './index.css'

const products = [
    { id: 1, name: "Càmera Retro", price: 299, oldPrice: 349, image: "https://picsum.photos/seed/camera/400/300", badge: "Oferta" },
    { id: 2, name: "Auriculars Pro", price: 199, oldPrice: null, image: "https://picsum.photos/seed/headphones/400/300", badge: null },
    { id: 3, name: "Rellotge Smart", price: 349, oldPrice: null, image: "https://picsum.photos/seed/watch/400/300", badge: "Nou" },
    { id: 4, name: "Altaveu Bluetooth", price: 89, oldPrice: 129, image: "https://picsum.photos/seed/speaker/400/300", badge: "Oferta" },
    { id: 5, name: "Teclat Mecànic", price: 159, oldPrice: null, image: "https://picsum.photos/seed/keyboard/400/300", badge: null },
    { id: 6, name: "Monitor 4K", price: 449, oldPrice: 549, image: "https://picsum.photos/seed/monitor/400/300", badge: "Oferta" },
]

function App() {
    return (
        <div className="font-main min-h-screen flex flex-col">

            <header className="shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <img
                            src="https://picsum.photos/seed/logo/100/100"
                            alt="Logo"
                            className="w-12 h-12 object-cover rounded-xl"
                        />
                        <span className="text-xl font-bold">TechStore</span>
                    </div>

                    <nav className="flex flex-col lg:flex-row gap-4 items-center">
                        <a href="#" className="hover:text-blue-600 transition-all duration-300">Inici</a>
                        <a href="#" className="hover:text-blue-600 transition-all duration-300">Productes</a>
                        <a href="#" className="hover:text-blue-600 transition-all duration-300">Contacte</a>
                    </nav>

                    <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-button hover:bg-blue-700 transition-all duration-300">
                        Registrar
                    </button>

                </div>
            </header>

            <main className="flex-1 py-18">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {products.map(product => (
                            <div
                                key={product.id}
                                className="relative bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 p-4 flex flex-col"
                            >

                                {product.badge && (
                                    <span className="absolute top-3 right-3 rounded-badge bg-red-500 text-white px-3 py-1 text-xs">
                                        {product.badge}
                                    </span>
                                )}

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-lg mb-4"
                                />

                                <h2 className="text-lg font-semibold mb-2">
                                    {product.name}
                                </h2>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xl font-bold">
                                        {product.price}€
                                    </span>

                                    {product.oldPrice && (
                                        <span className="text-gray-500 line-through">
                                            {product.oldPrice}€
                                        </span>
                                    )}
                                </div>

                                <button className="mt-auto bg-blue-600 text-white py-2 rounded-lg shadow-button hover:bg-blue-700 transition-all duration-300">
                                    Afegir al carret
                                </button>

                            </div>
                        ))}

                    </div>

                </div>
            </main>

            <footer className="bg-gray-100 py-18">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src="https://picsum.photos/seed/logo/100/100"
                                alt="Logo"
                                className="w-12 h-12 object-cover rounded-xl"
                            />
                            <span className="text-xl font-bold">TechStore</span>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Enllaços</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Inici</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Productes</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-all duration-300">Contacte</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Contacte</h3>
                            <p>Email: info@techstore.cat</p>
                            <p>Tel: 600 123 456</p>
                        </div>

                    </div>

                </div>
            </footer>

        </div>
    )
}

export default App