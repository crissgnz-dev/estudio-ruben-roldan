import React, { useState } from 'react';
import { Phone, Smartphone, MapPin, MessageSquare, ShieldCheck, Compass, Eye, EyeOff } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

// Official WhatsApp SVG logo
const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ContactSection() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section className="bg-surface/80 py-20 lg:py-28 border-t border-outline-variant/20" id="contacto">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <Compass className="w-4 h-4" />
            <span>Atención Personalizada & Directa</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal tracking-tight">
            Canales de Contacto Directo
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg mt-4 leading-relaxed">
            Comuníquese directamente con la oficina del <strong>Ingeniero Rubén Roldán</strong> para asesoría técnica, inspecciones y gestoría. Jurisdicción en CABA.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: WhatsApp + Phone with reveal toggle */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all flex flex-col gap-6 group">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Contacto Directo
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-1">Ing. Rubén Roldán</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Atención para la gestión de expedientes, presupuestos, planos y consultas técnicas de obra.
              </p>
            </div>

            {/* Phone with reveal toggle */}
            <div className="p-4 rounded-2xl bg-surface border border-outline-variant/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Celular / WhatsApp:</span>
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="text-primary hover:underline flex items-center gap-1 font-semibold text-xs"
                >
                  {showPhone ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showPhone ? 'Ocultar' : 'Ver Número'}</span>
                </button>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-charcoal tracking-tight font-mono">
                {showPhone ? '11 5409-0082' : '11 5409-••••'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
              <a
                href="https://wa.me/541154090082"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1fba59] text-white rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm text-center"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:1154090082"
                className="w-full py-3.5 px-4 purple-outline-cta rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar</span>
              </a>
            </div>
          </div>

          {/* Card 2: Office Address in Avellaneda */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col gap-6 group">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Sede Avellaneda, AMBA
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-1">Oficina Técnica</h3>
              <p className="text-base font-bold text-charcoal leading-snug mb-1">
                Av. Hipólito Yrigoyen 1105
              </p>
              <p className="text-sm text-on-surface-variant">
                Avellaneda, Provincia de Buenos Aires (AMBA)
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-outline-variant/20 space-y-2 text-sm text-charcoal">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="font-semibold">Mat. COPIME 9551</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="font-semibold">Metrogas 1° Cat. 19588</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-primary shrink-0" />
                <span className="font-semibold">Jurisdicción técnica en CABA</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Av.+Hipolito+Yrigoyen+1105,+Avellaneda,+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-3.5 px-4 violet-cta rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 text-center"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver en Google Maps</span>
            </a>
          </div>

        </div>

        {/* Map & Client Identity Banner */}
        <div className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Info Banner */}
          <div className="lg:col-span-5 p-8 md:p-10 space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src={logoImg} 
                alt="Logo Oficial del Estudio Rubén Roldán" 
                className="w-16 h-16 object-contain rounded-2xl p-1 bg-surface border border-outline-variant/30 shadow-xs"
              />
              <div>
                <h4 className="font-extrabold text-xl text-charcoal leading-tight">Estudio Rubén Roldán</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-wider mt-0.5">Asesoría Municipal Integral</p>
              </div>
            </div>

            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
              Oficina radicada en Avellaneda (Av. Hipólito Yrigoyen 1105), con atención técnica y gestoría de inspecciones en CABA.
            </p>

            <div className="p-4 rounded-2xl bg-surface border border-outline-variant/30 space-y-2 text-xs font-semibold text-charcoal">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Mat. COPIME 9551 — Consejo Profesional</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Metrogas 1° Cat. 19588 — Gasistas Matriculados</span>
              </div>
            </div>
          </div>

          {/* Right Map Embed for Av. Hipólito Yrigoyen 1105, Avellaneda */}
          <div className="lg:col-span-7 h-80 lg:h-96 w-full relative">
            <iframe
              title="Ubicación Av. Hipólito Yrigoyen 1105, Avellaneda"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Av.%20Hipolito%20Yrigoyen%201105%2C%20Avellaneda%2C%20Buenos%20Aires&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-primary/20 text-xs font-bold text-charcoal flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary animate-bounce" />
              <span>Av. Hipólito Yrigoyen 1105, Avellaneda</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
