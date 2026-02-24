import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-fons flex items-center justify-center p-4">
      <div className="bg-targeta rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform hover:scale-105 transition-transform duration-300">
        <div className="relative inline-block mb-6">
          <img 
            src="https://i.pravatar.cc/150" 
            alt="Avatar de l'usuari" 
            className="w-32 h-32 rounded-full border-4 border-marca shadow-lg"
          />
          <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-targeta"></span>
        </div>
        <h1 className="font-titol text-2xl font-bold text-text-clar mb-2">
          Maria García
        </h1>
        <p className="text-accent font-semibold text-lg mb-4">
          Desenvolupadora Frontend
        </p>
        <p className="text-text-clar/70 text-sm leading-relaxed mb-6">
          Apassionada per crear experiències web increïbles amb React i Tailwind CSS. 
          Sempre aprenent noves tecnologies i compartint coneixements.
        </p>
        <div className="flex justify-around mb-6 py-4 border-y border-marca/30">
          <div>
            <p className="text-text-clar font-bold text-xl">142</p>
            <p className="text-text-clar/50 text-xs">Projectes</p>
          </div>
          <div>
            <p className="text-text-clar font-bold text-xl">1.2K</p>
            <p className="text-text-clar/50 text-xs">Seguidors</p>
          </div>
          <div>
            <p className="text-text-clar font-bold text-xl">89</p>
            <p className="text-text-clar/50 text-xs">Seguint</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex-1 bg-marca hover:bg-boto-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg shadow-marca/30">
            Contactar
          </button>
          <button className="flex-1 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-fons font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
            Seguir
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
