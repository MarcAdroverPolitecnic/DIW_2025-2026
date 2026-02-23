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
      <div className="min-h-screen flex flex-col">
        {/* CAPÇALERA */}
        <header className="bg-card shadow-card sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-button flex items-center justify-center text-white font-bold">L</div>
              <span className="text-xl font-bold">TechStore</span>
            </div>

            <nav className="flex flex-col md:flex-row items-center gap-6 font-medium">
              <a href="#" className="hover:text-primary transition-colors">Inici</a>
              <a href="#" className="hover:text-primary transition-colors">Productes</a>
              <a href="#" className="hover:text-primary transition-colors">Suport</a>
            </nav>

            <button className="hidden lg:block bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-button shadow-button transition-all duration-300">
              Registrar
            </button>
          </div>
        </header>

        {/* GALERIA DE PRODUCTES */}
        <main className="container mx-auto px-4 py-18 flex-grow">
          <h2 className="text-3xl font-bold mb-12 text-center">Catàleg de Productes</h2>

          {/* Grid con breakpoints según Part 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-card rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 group relative flex flex-col"
                >
                  {/* Badge Absolut */}
                  {product.badge && (
                      <span className={`absolute top-3 right-3 z-10 px-3 py-1 text-xs font-bold text-white rounded-badge ${product.badge === 'Oferta' ? 'bg-badge' : 'bg-success'}`}>
                                    {product.badge}
                                </span>
                  )}

                  {/* Imatge */}
                  <div className="overflow-hidden rounded-t-card">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Contingut Targeta */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-xl font-bold text-primary">{product.price}€</span>
                      {product.oldPrice && (
                          <span className="text-sm text-dark-soft line-through">{product.oldPrice}€</span>
                      )}
                    </div>
                    <button className="mt-auto w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-button shadow-button transition-all duration-300">
                      Afegir a la cistella
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </main>

        {/* PEU DE PÀGINA */}
        <footer className="bg-dark text-white py-18">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-10 h-10 bg-primary rounded-button flex items-center justify-center text-white font-bold">L</div>
                <span className="text-xl font-bold">TechStore</span>
              </div>
              <div className="text-center text-light-soft text-sm">
                © 2026 TechStore. Tots els drets reservats.
              </div>
              <div className="flex justify-center md:justify-end gap-4 text-light-soft">
                <a href="#" className="hover:text-white transition-colors">Privacitat</a>
                <a href="#" className="hover:text-white transition-colors">Termes</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default App