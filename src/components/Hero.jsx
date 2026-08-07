import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  CheckCircle2, ArrowRight, ChevronLeft, ChevronRight,
  FileText, Wrench, ShieldCheck, Building2
} from 'lucide-react';

// WhatsApp SVG icon
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero({ onOpenQuoteModal, onSelectService }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const slides = [
    {
      type: 'about',
      badge: '🏛️ Estudio Rubén Roldán',
      title: 'Más de 45 años en ingeniería e inspección técnica',
      description: 'Oficina técnica radicada en Microcentro. Habilitaciones municipales, obras, instalaciones y mantenimiento. Jurisdicción en CABA.',
      items: ['Mat. COPIME 9551', 'Metrogas 1° Cat. 19588'],
      bg: null,
    },
    {
      type: 'service',
      id: 'obras',
      category: 'obras',
      icon: Wrench,
      badge: 'Metrogas 1° Cat. 19588',
      title: 'Obras e Instalaciones',
      description: 'Mantenimiento de edificios, gas natural en industrias y domicilios, instalaciones eléctricas, ventilación, incendio y plomería.',
      items: ['Mantenimiento de edificios', 'Gas natural: norma NAG-200 / Metrogas 19588', 'Instalaciones eléctricas y sanitarias'],
      bg: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=1920&auto=format&fit=crop',
    },
    {
      type: 'service',
      id: 'mantenimiento',
      category: 'mantenimiento',
      icon: ShieldCheck,
      badge: 'Ingeniería / COPIME',
      title: 'Mantenimiento de Instalaciones',
      description: 'Mantenimiento preventivo y certificación de calderas, ascensores y equipos de A/C para industria y propiedad horizontal.',
      items: ['Ascensores y equipos de A/C', 'Calderas: pruebas hidráulicas y certificación', 'Mantenimiento preventivo general'],
      bg: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop',
    },
    {
      type: 'service',
      id: 'habilitaciones',
      category: 'habilitaciones',
      icon: FileText,
      badge: 'Gestoría Oficial AGC CABA',
      title: 'Habilitaciones Municipales',
      description: 'Gestión integral de habilitaciones ante la AGC: comerciales, industriales, térmicas, eléctricas, incendio, ascensores, montacargas y grupos electrógenos.',
      items: ['Habilitaciones comerciales e industriales', 'Térmicas, incendio y electromecánicas', 'Ascensores, montacargas y grupos electrógenos'],
      bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop',
    },
  ];

  const total = slides.length;

  const goTo = useCallback((index, dir = 'next') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((index + total) % total);
      setIsAnimating(false);
    }, 400);
  }, [isAnimating, total]);

  const next = useCallback(() => goTo(activeIndex + 1, 'next'), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1, 'prev'), [activeIndex, goTo]);

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(next, 15000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 15000);
  };

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot = (i) => { goTo(i, i > activeIndex ? 'next' : 'prev'); resetTimer(); };

  // Touch/swipe support
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? handleNext() : handlePrev(); }
    touchStartX.current = null;
  };

  const slide = slides[activeIndex];

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ height: '100dvh', minHeight: '600px' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slide backgrounds (preloaded) ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== activeIndex}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === activeIndex ? 1 : 0,
            zIndex: 0,
            backgroundImage: s.bg ? `url('${s.bg}')` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: !s.bg ? '#1e293b' : undefined,
          }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: s.type === 'about'
                ? 'linear-gradient(135deg, #1e1b4b 0%, #1e293b 45%, #0f172a 100%)'
                : 'linear-gradient(to bottom, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.72) 60%, rgba(15,23,42,0.88) 100%)',
            }}
          />
          {/* Decorative noise / grain for about slide */}
          {s.type === 'about' && (
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
            />
          )}
          {/* Animated radial glow for about slide */}
          {s.type === 'about' && (
            <>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse"
                style={{ background: 'radial-gradient(circle, #6b38d4 0%, transparent 70%)', animationDuration: '3s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 animate-pulse"
                style={{ background: 'radial-gradient(circle, #8455ef 0%, transparent 70%)', animationDuration: '4s', animationDelay: '1.5s' }} />
            </>
          )}
        </div>
      ))}

      {/* ── Slide Content ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-6 md:px-12"
        style={{ zIndex: 10, paddingTop: 'calc(72px + 2rem)', paddingBottom: '4rem' }}
      >
        <div
          className="w-full max-w-4xl mx-auto transition-all duration-400"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating
              ? `translateX(${direction === 'next' ? '-32px' : '32px'})`
              : 'translateX(0)',
          }}
        >
          {/* Badge */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-purple-200 font-semibold text-xs md:text-sm border border-white/20 backdrop-blur-sm">
              {slide.badge}
            </span>
          </div>

          {/* Title */}
          {slide.type === 'about' ? (
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5">
              Más de 45 años liderando la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">
                ingeniería e inspección técnica
              </span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
              {slide.title}
            </h2>
          )}

          {/* Description */}
          <p className="text-base md:text-lg text-slate-200/90 mb-7 max-w-2xl mx-auto leading-relaxed">
            {slide.description}
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-9">
            {slide.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20 text-xs md:text-sm font-semibold text-white backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-violet-300 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          {slide.type === 'about' ? (
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 w-full px-4 sm:px-0">
              <a
                href="#sobre-nosotros"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 px-6 py-3.5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 backdrop-blur-sm transition-all"
              >
                <Building2 className="w-5 h-5 shrink-0" />
                <span>Conocer Nuestra Historia</span>
              </a>
              <a
                href="https://wa.me/541154090082"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fba59] text-white px-6 py-3.5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 shadow-lg transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 w-full px-4 sm:px-0">
              <button
                onClick={() => onSelectService && onSelectService(slide)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 transition-colors shadow-lg"
              >
                <span>Ver Explicación Completa</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
              <a
                href={`https://wa.me/541154090082?text=${encodeURIComponent(`Hola Ing. Rubén Roldán, quisiera consultar sobre el servicio: ${slide.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fba59] text-white px-6 py-3.5 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2.5 transition-colors shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ── Arrow: Left ── */}
      <button
        onClick={handlePrev}
        aria-label="Diapositiva anterior"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all active:scale-90"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* ── Arrow: Right ── */}
      <button
        onClick={handleNext}
        aria-label="Diapositiva siguiente"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all active:scale-90"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Dot indicators con progreso integrado ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Ir a diapositiva ${i + 1}`}
            className="relative flex items-center justify-center rounded-full overflow-hidden"
            style={{ width: activeIndex === i ? '2.5rem' : '0.625rem', height: '0.625rem', transition: 'width 0.3s ease' }}
          >
            {/* Track (fondo) */}
            <span
              className="absolute inset-0 rounded-full"
              style={{ background: 'rgba(255,255,255,0.3)' }}
            />
            {/* Fill animado solo en el activo */}
            {activeIndex === i && (
              <span
                key={activeIndex}
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ background: 'white', animation: 'dotProgress 15s linear forwards' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes dotProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
