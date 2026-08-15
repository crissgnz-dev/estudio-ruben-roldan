import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

// WhatsApp SVG icon
const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'sobre-nosotros', 'servicios', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros', id: 'sobre-nosotros' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#inicio" className={`flex items-center space-x-3 p-1.5 px-3 rounded-2xl border transition-all group ${
          isScrolled
            ? 'bg-white shadow-xs border-outline-variant/30 hover:border-primary/50'
            : 'bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm'
        }`}>
          <img
            src={logoImg}
            alt="Logo Oficial Estudio Rubén Roldán"
            className="w-10 h-10 md:w-11 md:h-11 object-contain rounded-xl p-0.5 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className={`font-extrabold text-base md:text-lg leading-tight tracking-tight transition-colors ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}>Estudio Rubén Roldán</span>
            <span className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${
              isScrolled ? 'text-primary' : 'text-purple-200'
            }`}>
              Asesoría Municipal Integral
            </span>
          </div>
        </a>

        {/* Navigation Links Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-all relative py-1 ${
                  isScrolled
                    ? isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                    : isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-gradient-to-r ${
                    isScrolled ? 'from-primary to-purple-600' : 'from-white to-purple-300'
                  }`} />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button Desktop: WhatsApp only */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/541154090082"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow active:scale-95 ${
              isScrolled
                ? 'bg-[#25D366] hover:bg-[#1fba59] text-white'
                : 'bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-sm'
            }`}
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Directo</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-2">
          <a
            href="https://wa.me/541154090082"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-xl transition-all active:scale-95 ${
              isScrolled ? 'bg-[#25D366] text-white shadow-xs' : 'bg-white/15 text-white border border-white/25 backdrop-blur-sm'
            }`}
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-all active:scale-95 ${
              isScrolled ? 'text-charcoal hover:bg-surface' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown con Glassmorphism dinámico (oscuro en hero / claro al hacer scroll) */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300 backdrop-blur-2xl border-b transition-colors ${
          isScrolled
            ? 'bg-white/90 border-outline-variant/30 text-charcoal'
            : 'bg-slate-900/90 border-white/15 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
        }`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-2xl text-base font-semibold transition-all active:scale-98 flex items-center justify-between ${
                    isScrolled
                      ? isActive
                        ? 'bg-primary/10 text-primary font-bold border border-primary/30 backdrop-blur-md shadow-xs'
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface'
                      : isActive
                        ? 'bg-purple-600/30 text-white font-bold border border-purple-400/40 backdrop-blur-md shadow-inner'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      isScrolled ? 'bg-primary' : 'bg-purple-400'
                    }`} />
                  )}
                </a>
              );
            })}
          </div>

          <div className={`pt-4 border-t transition-colors ${
            isScrolled ? 'border-outline-variant/20' : 'border-white/10'
          }`}>
            <a
              href="https://wa.me/541154090082"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#1fba59] active:scale-98 text-white rounded-2xl font-bold text-center flex items-center justify-center gap-2 transition-all shadow-lg text-sm uppercase tracking-wider border border-emerald-400/30"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Directo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
