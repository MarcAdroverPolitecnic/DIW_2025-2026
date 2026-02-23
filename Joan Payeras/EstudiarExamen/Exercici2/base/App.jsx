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
    <div>
      <p>Comença a crear el teu catàleg aquí!</p>
    </div>
  )
}

export default App
