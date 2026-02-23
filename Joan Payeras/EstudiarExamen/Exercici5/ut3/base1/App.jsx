function App() {
    return (
        // Fons
        <div className="min-h-screen bg-fons-profund flex items-center justify-center p-6">

            {/* Targeta de perfil */}
            <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">

                {/* Imatge de perfil circular */}
                <div className="flex justify-center mb-6">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="Perfil d'usuari"
                        className="w-32 h-32 rounded-full border-4 border-marca p-1 shadow-lg"
                    />
                </div>

                {/* Identitat: Nom amb font de títol i Càrrec amb color accent */}
                <div className="text-center mb-6">
                    <h1 className="font-titol text-3xl font-bold text-text-clar mb-2">
                        Joan Reus
                    </h1>
                    <p className="text-accent font-semibold uppercase tracking-wider text-sm">
                        Senior Product Designer
                    </p>
                </div>

                {/* Descripció */}
                <p className="text-text-clar/80 text-center leading-relaxed mb-8">
                    Apassionat per crear experiències digitals úniques utilitzant tecnologies modernes
                    com React i Tailwind CSS. M'encanta resoldre problemes complexos mitjançant el disseny.
                </p>

                {/* Accions: Botons amb colors de marca i accent */}
                <div className="flex flex-col gap-4">
                    {/* Botó amb color de marca i l'espaiat personalitzat spacing-18 */}
                    <button className="bg-marca hover:bg-marca/80 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-marca/20">
                        Contactar
                    </button>

                    {/* Botó amb color accent */}
                    <button className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 rounded-xl transition-all">
                        Veure Portfolio
                    </button>
                </div>

                {/* Demostració de l'espaiat personalitzat spacing-18 al final */}
                <div className="mt-18 pt-6 border-t border-white/10 text-center">
          <span className="text-xs text-text-clar/40 italic">
            Espaiat superior de 4.5rem (p-18) aplicat
          </span>
                </div>

            </div>
        </div>
    );
}

export default App;