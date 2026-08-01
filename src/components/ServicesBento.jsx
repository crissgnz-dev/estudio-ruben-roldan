import React from 'react';
import { FileText, Wrench, ShieldCheck, ArrowRight, CheckCircle2, Info } from 'lucide-react';

export default function ServicesBento({ onSelectService }) {

  const services = [
    {
      id: 'obras',
      category: 'obras',
      icon: Wrench,
      iconBg: 'bg-primary/10 text-primary',
      badge: 'Metrogas 1° Cat',
      title: 'OBRAS E INSTALACIONES',
      items: [
        'Gas natural en industrias y domicilios',
        'Instalaciones eléctricas y electrónicas',
        'Ventilación mecánica y obras de incendio',
        'Plomería, remodelaciones y obra seca'
      ]
    },
    {
      id: 'mantenimiento',
      category: 'mantenimiento',
      icon: ShieldCheck,
      iconBg: 'bg-primary/10 text-primary',
      badge: 'Protocolos COPIME',
      title: 'MANTENIMIENTO DE INSTALACIONES',
      items: [
        'Calderas: pruebas hidráulicas y certificación',
        'Ascensores, montacargas y equipos de A/C',
        'Protocolo de continuidad a tierra (jabalina)',
        'Medición de iluminación (Luxes)'
      ]
    },
    {
      id: 'habilitaciones',
      category: 'habilitaciones',
      icon: FileText,
      iconBg: 'bg-primary/10 text-primary',
      badge: 'Gestoría Oficial',
      title: 'HABILITACIONES MUNICIPALES',
      items: [
        'Habilitaciones comerciales e industriales',
        'Térmicas, incendio y electromecánicas',
        'Ascensores, montacargas y grupos electrógenos',
        'Instalaciones eléctricas y evacuación'
      ]
    }
  ];


  return (
    <section className="py-20 lg:py-28 bg-white" id="servicios">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Catálogo Profesional
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg mt-4 leading-relaxed">
            Soluciones integrales de ingeniería respaldadas por matrículas oficiales y amplia experiencia. Haga clic en cualquiera para ver la explicación detallada.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bento-card p-8 bg-white border border-outline-variant/40 rounded-3xl shadow-sm flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-3 text-on-surface-variant mb-8 text-sm md:text-base">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="inline-flex items-center justify-between w-full pt-4 border-t border-outline-variant/20 text-primary font-bold text-sm md:text-base group-hover:text-primary-container">
                  <span className="flex items-center gap-1.5">
                    <Info className="w-4 h-4" />
                    Ver Explicación y Cotización
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
