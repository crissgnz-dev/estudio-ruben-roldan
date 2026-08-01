import React from 'react';
import { Building2, Factory, CheckCircle2, MapPin, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-surface/80 py-20 lg:py-28 border-y border-outline-variant/20" id="sobre-nosotros">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Stats & Credentials Block */}
          <div className="lg:col-span-5 relative">

            {/* Main decorative gradient card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-purple-700 via-primary to-indigo-600 p-8 md:p-10 shadow-2xl overflow-hidden">
              
              {/* Decorative background circles */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

              {/* Header text */}
              <div className="relative z-10 mb-8">
                <span className="text-purple-200 font-bold text-xs uppercase tracking-widest">Trayectoria & Solvencia</span>
                <h3 className="text-white font-extrabold text-2xl md:text-3xl mt-1 leading-tight">
                  Estudio Rubén Roldán
                </h3>
                <p className="text-purple-200 text-sm mt-1">Asesoría Municipal Integral</p>
              </div>

              {/* Stats Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <span className="text-white font-extrabold text-3xl md:text-4xl leading-none">50+</span>
                  <p className="text-purple-200 text-xs font-semibold mt-1 leading-tight">Años de Trayectoria</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <span className="text-white font-extrabold text-xl md:text-2xl leading-none">COPIME</span>
                  <p className="text-purple-200 text-xs font-semibold mt-1 leading-tight">Mat. 9551</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <span className="text-white font-extrabold text-xl md:text-2xl leading-none">Metrogas</span>
                  <p className="text-purple-200 text-xs font-semibold mt-1 leading-tight">1° Cat. N° 19588</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <span className="text-white font-extrabold text-xl md:text-2xl leading-none">CABA</span>
                  <p className="text-purple-200 text-xs font-semibold mt-1 leading-tight">Jurisdicción</p>
                </div>
              </div>

              {/* Specializations tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {['Habilitaciones', 'Gas Matriculado', 'Calderas', 'Termotanques', 'Protocolo SRT'].map((tag) => (
                  <span key={tag} className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: About Us Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              <Award className="w-4 h-4" />
              <span>Sobre Nosotros</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mb-5 leading-tight">
              Soluciones de Ingeniería y Asesoría Normativa
            </h2>

            <div className="space-y-3 text-on-surface-variant text-base md:text-lg leading-relaxed mb-6">
              <p>
                Bajo la dirección del <strong>Ingeniero Rubén Roldán</strong>, brindamos gestión integral en habilitaciones, obras matriculadas y certificaciones.
              </p>
              <p>
                Garantizamos rigor técnico y acompañamiento directo a consorcios e industrias en sus adecuaciones reglamentarias.
              </p>
            </div>

            {/* Specialization Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-charcoal mb-1">Propiedad Horizontal</h3>
                <p className="text-sm text-on-surface-variant leading-normal">
                  Gestión integral y certificaciones de seguridad para consorcios, edificios residenciales y administraciones.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/30 hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-charcoal mb-1">Industria y Comercio</h3>
                <p className="text-sm text-on-surface-variant leading-normal">
                  Habilitaciones industriales, adecuaciones de gas de alta presión, tableros eléctricos y protocolos de seguridad laboral.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
