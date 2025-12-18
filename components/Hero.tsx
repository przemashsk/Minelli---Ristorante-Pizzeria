
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920')" }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="text-gold text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4 block animate-fade-in">
          Autentyczna Kuchnia Włoska
        </span>
        <h1 className="text-white text-6xl md:text-8xl font-serif mb-8 animate-slide-up">
          Ristorante <br /> <span className="italic">Minelli</span>
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light mb-10 leading-relaxed animate-fade-in">
          Zapraszamy do krainy smaków, gdzie tradycyjne receptury spotykają się z nowoczesną finezją. Poczuj duszę słonecznej Italii w samym sercu Poznania.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <a
            href="#menu"
            className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-gold hover:text-white transition-all shadow-2xl"
          >
            Odkryj Menu
          </a>
          <a
            href="#reservation"
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-all"
          >
            Rezerwacja
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-50 hover:opacity-100 transition-opacity">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
