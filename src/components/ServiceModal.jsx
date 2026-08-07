import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, MessageSquare, ArrowRight, FileText, Wrench, Sparkles, BookOpen } from 'lucide-react';

// WhatsApp SVG Logo inline
const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ServiceModal({ isOpen, onClose, selectedService }) {
  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !selectedService) return null;

  // Detailed explanatory data for each service category
  const serviceDetails = {
    obras: {
      title: 'Obras e Instalaciones',
      subtitle: 'Ejecución de obras de gas matriculadas, instalaciones eléctricas y sistemas mecánicos',
      icon: Wrench,
      description: 'Estudio especializado en la realización de obras de gas natural de 1° Categoría (Mat. Metrogas 19588). Ejecutamos proyectos de instalaciones completas en todo tipo de viviendas y plantas industriales, incluyendo obras eléctricas, mecánicas, electrónicas, ventilación y prevención contra incendio.',
      normative: 'Normas ENARGAS (NAG-200 / NAG-201) - Matrícula Metrogas 1° Categoría N° 19588 — Mat. COPIME 9551.',
      scope: [
        'Instalaciones de gas natural para industrias, grandes consumos y domicilios.',
        'Instalaciones mecánicas, electromecánicas y electrónicas.',
        'Obras de ventilación mecánica e instalaciones de prevención contra incendio.',
        'Instalaciones eléctricas industriales y domiciliarias.',
        'Reparaciones, plomería, soldaduras, agua fría y caliente.',
        'Instalaciones de ascensores, montaplatos y montacargas.',
        'Trabajos de obra seca (Durlock), pintura y remodelaciones edilicias.',
        'Automatizaciones en calderas y termotanques.'
      ],
      deliverables: 'Planos aprobados por Metrogas/Naturgy, certificado de rehabilitación de suministro y libro de obra firmado por el Ing. Rubén Roldán (Mat. COPIME 9551).'
    },
    mantenimiento: {
      title: 'Mantenimiento de Instalaciones',
      subtitle: 'Inspecciones periódicas, certificación de calderas, puesta a tierra y luxometría',
      icon: ShieldCheck,
      description: 'Brindamos servicios de mantenimiento preventivo y correctivo para industrias y propiedad horizontal. Elaboramos protocolos de medición reglamentarios para dar cumplimiento a inspecciones del Ministerio de Trabajo, SRT y GCBA.',
      normative: 'Res. SRT 900/15 (Puesta a Tierra), Res. SRT 84/12 (Luxometría) y Ordenanza 33.619 (Calderas CABA).',
      scope: [
        'Pruebas hidráulicas en calderas de baja y alta presión.',
        'Certificación y mantenimiento de calderas y termotanques.',
        'Reparación y mantenimiento de equipos de aire acondicionado.',
        'Certificación y mantenimiento de ascensores y montacargas.',
        'Medición de continuidad por jabalina (protocolo de puesta a tierra).',
        'Colocación de jabalinas de descarga a tierra.',
        'Medición de iluminación (Luxes) en ambientes laborales.',
        'Gestoría integral de trámites y seguros obligatorios.'
      ],
      deliverables: 'Protocolos de medición con oblea digital homologada por el Colegio de Ingenieros y firma profesional del Ing. Rubén Roldán (Mat. COPIME 9551).'
    },
    habilitaciones: {
      title: 'Habilitaciones Municipales',
      subtitle: 'Tramitación integral de habilitaciones ante la AGC (CABA) y organismos municipales',
      icon: FileText,
      description: 'Brindamos asesoramiento y gestión integral para la obtención de permisos de habilitación de comercios, industrias y consorcios ante los organismos oficiales. Confeccionamos planos técnicos y encomiendas profesionales ante COPIME.',
      normative: 'Regulado por AGC (Agencia Gubernamental de Control), Código de Edificación Ley 6100 y normativas municipales vigentes.',
      scope: [
        'Habilitaciones térmicas de calderas y termotanques.',
        'Certificación de calderas y termotanques junto a sus obleas.',
        'Habilitación de instalaciones de incendio y evacuación.',
        'Habilitaciones electromecánicas e instalaciones eléctricas.',
        'Habilitación de ascensores, montacargas y montaplatos.',
        'Habilitaciones comerciales de locales e industrias.',
        'Habilitaciones de grupos electrógenos.',
        'Confección de planos técnicos y encomiendas profesionales ante COPIME.'
      ],
      deliverables: 'Certificado oficial de habilitación, plano de uso conforme y encomienda digital firmada por el Ing. Rubén Roldán (Mat. COPIME 9551).'
    }
  };

  const key = selectedService.category || 'obras';
  const detail = serviceDetails[key] || serviceDetails.obras;
  const IconComponent = detail.icon;

  const whatsappMessage = encodeURIComponent(
    `Hola Ing. Rubén Roldán, quisiera solicitar asesoramiento y presupuesto sobre el servicio: ${detail.title}`
  );

  return (
    // Overlay: click outside the white card to close
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      {/* Stop propagation so clicking inside the card doesn't close the modal */}
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-outline-variant/30 relative my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-on-surface-variant hover:bg-surface transition-colors z-10"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md inline-block mb-1">
              Explicación Técnica del Servicio
            </span>
            <h3 className="text-2xl font-extrabold text-charcoal leading-tight">{detail.title}</h3>
            <p className="text-xs md:text-sm text-on-surface-variant mt-1 font-medium">{detail.subtitle}</p>
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 mb-6">
          <p className="text-sm md:text-base text-charcoal leading-relaxed">
            {detail.description}
          </p>
        </div>

        {/* Normative Highlight */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-50 border border-primary/20 text-xs md:text-sm text-primary mb-6">
          <BookOpen className="w-5 h-5 shrink-0 text-primary" />
          <div>
            <strong className="font-bold">Marco Normativo Vigente:</strong> {detail.normative}
          </div>
        </div>

        {/* Technical Scope list */}
        <div className="mb-6">
          <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Alcance del Trabajo e Inspecciones:</span>
          </h4>
          <ul className="space-y-2.5">
            {detail.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="p-4 rounded-xl bg-surface border border-outline-variant/30 mb-8">
          <span className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
            📄 Documentación Entregada:
          </span>
          <p className="text-xs md:text-sm text-on-surface-variant font-medium">
            {detail.deliverables}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-outline-variant/20">
          <a
            href={`https://wa.me/541154090082?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1fba59] text-white flex-1 py-3.5 px-5 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 text-center transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
