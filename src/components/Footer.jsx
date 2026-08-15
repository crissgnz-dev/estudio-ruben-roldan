import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Scale, Lock, FileText, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

// Official WhatsApp SVG logo
const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Modal genérico de documentos legales ───────────────────────────────────
function LegalModal({ isOpen, onClose, type }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const content = {
    legal: {
      icon: Scale,
      badge: 'Aviso Legal',
      title: 'Aviso Legal',
      subtitle: 'Condiciones de uso del sitio web del Estudio Rubén Roldán',
      sections: [
        {
          icon: FileText,
          heading: 'Titularidad y Responsable del Sitio',
          text: 'El presente sitio web es propiedad de Estudio Rubén Roldán, estudio de ingeniería con domicilio en Carlos Pellegrini 173, Ciudad Autónoma de Buenos Aires, Argentina. Ing. Rubén Roldán, Mat. COPIME 9551 – Metrogas 1° Cat. N° 19588.'
        },
        {
          icon: Eye,
          heading: 'Objeto del Sitio',
          text: 'Este sitio tiene carácter exclusivamente informativo. La información aquí publicada sobre servicios de habilitaciones municipales, instalaciones de gas, mantenimiento y obras no constituye una oferta contractual vinculante. Cada proyecto requiere una evaluación técnica presencial y un presupuesto formal.'
        },
        {
          icon: AlertTriangle,
          heading: 'Limitación de Responsabilidad',
          text: 'El Estudio Rubén Roldán no se responsabiliza por errores u omisiones en los contenidos, ni por daños derivados del uso de la información publicada. Las normativas y matrículas vigentes se encuentran sujetas a actualización por parte de los organismos competentes (COPIME, Metrogas, AGC, SRT).'
        },
        {
          icon: Lock,
          heading: 'Propiedad Intelectual',
          text: 'Todos los contenidos de este sitio —textos, imágenes, logotipos y diseño— son propiedad del Estudio Rubén Roldán o de sus proveedores. Queda prohibida su reproducción total o parcial sin autorización escrita previa.'
        },
        {
          icon: Scale,
          heading: 'Legislación Aplicable',
          text: 'El uso de este sitio web se rige por la legislación vigente en la República Argentina. Cualquier controversia será sometida a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires.'
        }
      ]
    },
    privacidad: {
      icon: Lock,
      badge: 'Política de Privacidad',
      title: 'Política de Privacidad',
      subtitle: 'Tratamiento de datos personales conforme a la Ley 25.326 (Argentina)',
      sections: [
        {
          icon: Database,
          heading: 'Datos que Recopilamos',
          text: 'Al contactarnos a través del formulario o por WhatsApp, podemos recibir su nombre, teléfono y correo electrónico. No recopilamos datos sensibles ni financieros a través de este sitio.'
        },
        {
          icon: UserCheck,
          heading: 'Finalidad del Tratamiento',
          text: 'Los datos personales recabados se utilizan exclusivamente para responder consultas técnicas, elaborar presupuestos y coordinar visitas de inspección. No son cedidos ni comercializados a terceros bajo ninguna circunstancia.'
        },
        {
          icon: Eye,
          heading: 'Derechos del Titular',
          text: 'Conforme a la Ley N° 25.326 de Protección de Datos Personales, usted tiene derecho a acceder, rectificar, suprimir y oponerse al tratamiento de sus datos en cualquier momento, enviando un correo a la dirección de contacto del estudio.'
        },
        {
          icon: Lock,
          heading: 'Seguridad de los Datos',
          text: 'Implementamos medidas razonables de seguridad para proteger la información personal recibida. Sin embargo, ninguna transmisión por internet puede garantizarse como 100% segura.'
        },
        {
          icon: FileText,
          heading: 'Cambios a esta Política',
          text: 'El Estudio Rubén Roldán se reserva el derecho de actualizar esta política en cualquier momento. La versión vigente estará siempre disponible en este sitio. La última actualización corresponde al año 2026.'
        }
      ]
    }
  };

  const data = content[type];
  const IconHeader = data.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-outline-variant/30 relative my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-on-surface-variant hover:bg-surface transition-colors z-10"
          aria-label="Cerrar modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Encabezado */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
            <IconHeader className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-md inline-block mb-1">
              {data.badge}
            </span>
            <h3 className="text-2xl font-extrabold text-charcoal leading-tight">{data.title}</h3>
            <p className="text-xs md:text-sm text-on-surface-variant mt-1 font-medium">{data.subtitle}</p>
          </div>
        </div>

        {/* Secciones */}
        <div className="space-y-4 mb-6">
          {data.sections.map((section, idx) => {
            const SectionIcon = section.icon;
            return (
              <div key={idx} className="bg-surface p-4 rounded-2xl border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-2">
                  <SectionIcon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal">{section.heading}</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{section.text}</p>
              </div>
            );
          })}
        </div>

        {/* Pie del modal */}
        <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/541154090082"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1fba59] text-white flex-1 py-3.5 px-5 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Consultar por WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="flex-1 py-3.5 px-5 rounded-xl font-bold text-sm uppercase tracking-wider border border-outline-variant/40 text-on-surface-variant hover:bg-surface transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
export default function Footer() {
  const [openModal, setOpenModal] = useState(null); // 'legal' | 'privacidad' | null

  return (
    <>
      <footer className="bg-charcoal text-white py-14 border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-white/10">
            
            {/* Logo & Brand */}
            <div className="flex items-center space-x-3">
              <img 
                src={logoImg} 
                alt="Logo Footer Estudio Rubén Roldán"
                className="w-10 h-10 object-contain rounded-xl p-0.5 bg-white shadow-xs"
              />
              <div>
                <span className="font-extrabold text-xl leading-none text-white tracking-tight">Estudio Rubén Roldán</span>
                <p className="text-xs text-slate-400 mt-1">Asesoría Municipal Integral & Ingeniería</p>
              </div>
            </div>

            {/* Quick Nav links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              <a href="#sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/541154090082"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba59] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Licenses Row */}
          <div className="py-6 border-b border-white/10 flex flex-wrap justify-center gap-4 text-xs text-slate-400 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Mat. COPIME 9551</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Metrogas 1° Cat. 19588</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Jurisdicción en CABA</span>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
            <p>© {new Date().getFullYear()} Estudio Rubén Roldán · Carlos Pellegrini 173, CABA</p>
            <div className="flex gap-6">
              <button
                id="footer-aviso-legal"
                onClick={() => setOpenModal('legal')}
                className="hover:underline hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-slate-400 text-xs"
              >
                Aviso Legal
              </button>
              <button
                id="footer-politica-privacidad"
                onClick={() => setOpenModal('privacidad')}
                className="hover:underline hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-slate-400 text-xs"
              >
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modales legales */}
      <LegalModal
        isOpen={openModal === 'legal'}
        onClose={() => setOpenModal(null)}
        type="legal"
      />
      <LegalModal
        isOpen={openModal === 'privacidad'}
        onClose={() => setOpenModal(null)}
        type="privacidad"
      />
    </>
  );
}
