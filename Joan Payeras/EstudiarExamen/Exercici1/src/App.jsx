import './index.css'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            {/* Targeta de perfil */}
            <div className="bg-marca-fons rounded-xl shadow-lg p-8 max-w-sm w-full text-center">

                {/* Imatge de perfil: Circular */}
                <div className="flex justify-center mb-6">
                    <img
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                        src="https://via.placeholder.com/150"
                        alt="Foto de perfil"
                    />
                </div>

                {/* Identitat: Nom amb font de títol i càrrec */}
                <div className="mb-4">
                    <h1 className="text-2xl font-titol font-bold text-yellow-600">
                        Nom de l'Usuari
                    </h1>
                    <p className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                        Càrrec Professional
                    </p>
                </div>

                {/* Descripció: Breu text de presentació */}
                <p className="text-gray-600 mb-8">
                    Aquesta és una breu descripció de l'usuari. Pots explicar les teves habilitats,
                    passions o el que fas actualment en el teu àmbit professional.
                </p>

                {/* Accions: Botons amb espaiat personalitzat (p-18 o gap-18 si calgués) */}
                <div className="flex flex-col gap-3">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Contactar
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                        Veure Portfolio
                    </button>
                </div>

                {/* Exemple d'ús de la mida d'espaiat personalitzada 18 (4.5rem) */}
                <div className="mt-18 text-xs text-gray-400">
                    Espai superior de 4.5rem (spacing-18)
                </div>
            </div>
        </div>
    )
}

export default App