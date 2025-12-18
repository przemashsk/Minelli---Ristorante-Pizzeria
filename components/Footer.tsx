
import React from 'react';
import { APP_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="text-3xl font-serif">MINELLI</h4>
            <p className="text-slate-400 font-light leading-relaxed">
              Oaza włoskiego smaku w sercu Poznania. Miejsce, gdzie pasja do jedzenia łączy ludzi od pokoleń.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                FB
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                IG
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                TA
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8 text-gold">Lokalizacja</h5>
            <p className="text-slate-400 mb-2">{APP_CONFIG.address}</p>
            <p className="text-slate-400 mb-2">Tel: {APP_CONFIG.phone}</p>
            <p className="text-slate-400">{APP_CONFIG.email}</p>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8 text-gold">Godziny otwarcia</h5>
            <ul className="space-y-4 text-slate-400">
              {APP_CONFIG.hours.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-white/10 pb-2">
                  <span>{item.day}</span>
                  <span className="text-white font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8 text-gold">Newsletter</h5>
            <p className="text-slate-400 mb-6 text-sm">Zapisz się, aby otrzymywać informacje o nowych daniach i wydarzeniach.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Twój e-mail" 
                className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 flex-1 outline-none focus:border-gold transition-all"
              />
              <button className="bg-gold text-white px-4 rounded-r-xl hover:bg-gold/90 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-slate-500 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Restauracja Minelli. Wszelkie prawa zastrzeżone. Design: Modern Italian Concept.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
