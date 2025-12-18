
import React, { useState } from 'react';
import { ReservationStatus } from '../types';

const Reservation: React.FC = () => {
  const [status, setStatus] = useState<ReservationStatus>(ReservationStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ReservationStatus.PENDING);
    // Simulate API call
    setTimeout(() => {
      setStatus(ReservationStatus.SUCCESS);
    }, 1500);
  };

  return (
    <section id="reservation" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-gold text-xl font-medium tracking-[0.2em] uppercase mb-4">
            Rezerwacje
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">
            Zaplanuj swój <span className="italic">wieczór</span>
          </h3>
          <p className="text-slate-500 font-light leading-relaxed mb-8">
            Niezależnie od tego, czy jest to romantyczna kolacja, czy biznesowy lunch, zadbamy o każdy szczegół. Nasz zespół skontaktuje się z Tobą w celu potwierdzenia terminu.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Telefon</p>
                <p className="text-slate-500">+48 61 851 00 00</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full mr-4 text-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Godziny Rezerwacji</p>
                <p className="text-slate-500">Codziennie: 12:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#fafaf9] p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
          {status === ReservationStatus.SUCCESS ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-serif text-slate-900 mb-4">Dziękujemy!</h4>
              <p className="text-slate-500">Twoja prośba o rezerwację została wysłana. Skontaktujemy się z Tobą wkrótce.</p>
              <button 
                onClick={() => setStatus(ReservationStatus.IDLE)}
                className="mt-8 text-gold font-bold uppercase tracking-widest text-sm hover:underline"
              >
                Nowa rezerwacja
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Imię i Nazwisko</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Telefon</label>
                  <input required type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Liczba osób</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n===1 ? 'osoba' : 'osoby'}</option>)}
                    <option value="9+">9+ osób</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Data</label>
                  <input required type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Godzina</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all">
                    {['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Dodatkowe uwagi</label>
                <textarea rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all"></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === ReservationStatus.PENDING}
                className="w-full bg-gold text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-gold/90 transition-all shadow-xl disabled:opacity-50"
              >
                {status === ReservationStatus.PENDING ? 'Wysyłanie...' : 'Zarezerwuj stolik'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
