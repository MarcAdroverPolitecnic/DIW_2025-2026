import './index.css'

const products = [
  { id: 1, name: "Càmera Retro", price: 299, oldPrice: 349, image: "https://picsum.photos/seed/camera/400/300", badge: "Oferta" },
  { id: 2, name: "Auriculars Pro", price: 199, oldPrice: null, image: "https://picsum.photos/seed/headphones/400/300", badge: null },
  { id: 3, name: "Rellotge Smart", price: 349, oldPrice: null, image: "https://picsum.photos/seed/watch/400/300", badge: "Nou" },
  { id: 4, name: "Altaveu Bluetooth", price: 89, oldPrice: 129, image: "https://picsum.photos/seed/speaker/400/300", badge: "Oferta" },
  { id: 5, name: "Teclat Mecànic", price: 159, oldPrice: null, image: "https://picsum.photos/seed/keyboard/400/300", badge: null },
  { id: 6, name: "Monitor 4K", price: 449, oldPrice: 549, image: "https://picsum.photos/seed/monitor/400/300", badge: "Oferta" },
]

function Header() {
  return (
    <header className="bg-dark text-white font-main">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-button flex items-center justify-center">
              <span className="text-xl">🛒</span>
            </div>
            <span className="text-xl font-bold tracking-tight">TechShop</span>
          </div>
          <nav className="flex flex-col md:flex-row gap-2 md:gap-8">
            <a href="#" className="text-white hover:text-accent transition-colors font-medium">Inici</a>
            <a href="#" className="text-light-soft hover:text-accent transition-colors font-medium">Productes</a>
            <a href="#" className="text-light-soft hover:text-accent transition-colors font-medium">Ofertes</a>
            <a href="#" className="text-light-soft hover:text-accent transition-colors font-medium">Contacte</a>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-button font-semibold shadow-button transition-all">
              Registrar-se
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function ProductCard({ product }) {
  return (
    <div className="bg-card rounded-card shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 font-main">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.badge && (
          <span className={`absolute top-3 right-3 px-3 py-1 rounded-badge text-white text-sm font-semibold ${product.badge === 'Oferta' ? 'bg-badge' : 'bg-success'}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-dark">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-2xl font-bold text-primary">{product.price}€</p>
          {product.oldPrice && (
            <p className="text-lg text-dark-soft line-through">{product.oldPrice}€</p>
          )}
        </div>
        <button className="w-full mt-4 bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-button shadow-button hover:shadow-card-hover transition-all duration-200">
          Afegir al carret
        </button>
      </div>
    </div>
  )
}

function ProductGrid() {
  return (
    <main className="bg-light py-18 font-main">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Els nostres productes
          </h2>
          <p className="text-dark-soft max-w-128 mx-auto">
            Descobreix la nostra selecció de productes tecnològics de primera qualitat amb les millors ofertes del mercat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-18 font-main">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-button flex items-center justify-center">
                <span className="text-xl">🛒</span>
              </div>
              <span className="text-xl font-bold">TechShop</span>
            </div>
            <p className="text-light-soft leading-relaxed">
              La teva botiga de tecnologia de confiança des de 2024. Qualitat garantida i enviaments ràpids.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Enllaços</h4>
            <ul className="space-y-3 text-light-soft">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nosaltres</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de privacitat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termes i condicions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Contacte</h4>
            <ul className="space-y-3 text-light-soft">
              <li className="flex items-center gap-2">📧 info@techshop.com</li>
              <li className="flex items-center gap-2">📞 971 123 456</li>
              <li className="flex items-center gap-2">📍 Palma de Mallorca</li>
              <li className="flex items-center gap-2">🕐 Dl-Dv: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dark-soft mt-12 pt-8 text-center text-light-soft">
          <p>© 2024 TechShop. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App
