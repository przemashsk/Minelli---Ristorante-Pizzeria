
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Reservation from './components/Reservation';
import GeminiAssistant from './components/GeminiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add custom animations or scroll reveals if needed
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Short About/Intro Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-gold text-xl font-medium tracking-[0.2em] uppercase mb-4">Witaj w Minelli</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
                Gdzie tradycja spotyka się z <span className="italic">nowoczesną elegancją</span>
              </h3>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
                Nasza kuchnia to hołd dla najszlachetniejszych składników Italii. Od ręcznie wyrabianego makaronu, przez pizzę z pieca opalanego drewnem, aż po wyselekcjonowane wina. Restauracja Minelli to nie tylko jedzenie – to atmosfera, którą tworzymy z pasją od lat.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center border-t border-slate-100 pt-12">
                <div>
                  <p className="text-3xl font-serif text-slate-900 mb-2">15+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Lat doświadczenia</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-slate-900 mb-2">40+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Rodzajów win</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-slate-900 mb-2">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Włoskich składników</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MenuSection />

        {/* Gallery Preview / Atmosphere */}
        <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-gold text-xl font-medium tracking-[0.2em] uppercase mb-4">Galeria</h2>
              <h3 className="text-4xl font-serif text-slate-900">Nasza atmosfera</h3>
            </div>
            <a href="#" className="hidden md:block text-slate-900 font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-1 hover:text-gold transition-colors">
              Zobacz całą galerię
            </a>
          </div>
          
          <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg group relative flex-shrink-0">
                <img 
                  src={`https://picsum.photos/seed/minelli-gallery-${i}/800/1000`} 
                  alt="Atmosphere"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif italic text-2xl">Minelli Life</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Reservation />
      </main>

      <Footer />
      
      {/* AI Assistant */}
      <GeminiAssistant />

      {/* Tailwind Utility styles for specific animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
