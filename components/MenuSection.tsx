
import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const categories = [
  { id: 'all', name: 'Wszystkie' },
  { id: 'starters', name: 'Przystawki' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'mains', name: 'Dania Główne' },
  { id: 'desserts', name: 'Desery' }
];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMenu = activeCategory === 'all' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#fafaf9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold text-xl font-medium tracking-[0.2em] uppercase mb-4">
            Karta Dań
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">
            Kulinarne Podróże
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-2 rounded-full text-sm font-semibold tracking-widest uppercase transition-all ${
                activeCategory === cat.id
                  ? 'bg-gold text-white shadow-lg scale-105'
                  : 'bg-white text-slate-500 hover:text-gold hover:bg-white/80 border border-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMenu.map((item) => (
            <div 
              key={item.id}
              className="bg-white group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-50"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.popular && (
                  <span className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Bestseller
                  </span>
                )}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-slate-900 p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-serif text-slate-900 group-hover:text-gold transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xl font-semibold text-slate-900">{item.price}</span>
                </div>
                <p className="text-slate-500 leading-relaxed font-light text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center text-gold text-xs font-bold tracking-widest uppercase">
                  <span>Więcej informacji</span>
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
