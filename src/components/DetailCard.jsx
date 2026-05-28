import { modelsForYear } from '../data';
import UnconfirmedBadge from './UnconfirmedBadge';

function isLight(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const L = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return L > 0.72;
}

function PhotoPlaceholder({ label = 'Foto do carro' }) {
  return (
    <div
      className="relative w-full border border-rule rounded-md stripes overflow-hidden flex items-center justify-center"
      style={{ aspectRatio: '4/3', background: 'var(--surface-soft)' }}
    >
      <div className="flex flex-col items-center gap-2 text-center px-4">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: 'var(--muted)' }}>
          <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8.5" cy="10" r="1.4" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4 17l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>{label}</div>
        <div className="font-mono text-[10.5px]" style={{ color: 'var(--muted)' }}>a inserir</div>
      </div>
    </div>
  );
}

function VideoEmbed({ id }) {
  return (
    <div
      className="relative w-full border border-rule rounded-md overflow-hidden"
      style={{ aspectRatio: '16/9', background: '#000' }}
    >
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="Vídeo do carro"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function DetailCard({ color, year }) {
  if (!color) {
    return (
      <div
        className="border border-rule rounded-lg p-8 text-center"
        style={{ background: 'var(--surface-soft)' }}
      >
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
          Detalhe
        </div>
        <p className="text-[15px]" style={{ color: 'var(--muted)' }}>
          Selecione uma cor da paleta para ver os detalhes.
        </p>
      </div>
    );
  }

  const light = isLight(color.hex);
  const models = color.models ?? modelsForYear(year);

  return (
    <article
      key={color.name + year}
      className="fade-in border border-rule rounded-lg overflow-hidden"
      style={{ background: 'var(--surface-soft)' }}
    >
      {/* Large swatch header */}
      <div
        className="relative p-6 sm:p-7"
        style={{
          background: color.hex,
          color: light ? '#222222' : '#FFFFFF',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase mb-2 opacity-75 flex items-center justify-between">
          <span>{color.code}</span>
          <span>{year}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl leading-tight tracking-tight font-medium flex items-center gap-2.5">
          <span>{color.name}</span>
          {color.unconfirmed && <UnconfirmedBadge className="w-5 h-5" style={{ fontSize: '12px' }} />}
        </h3>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-7 flex flex-col gap-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: models + notes */}
          <div className="flex flex-col gap-6">
            <section>
              <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--muted)' }}>
                Modelos que usavam esta cor
              </h4>
              <ul className="divide-y divide-rule border-t border-b border-rule">
                {models.map((m) => (
                  <li key={m} className="py-2.5">
                    <span className="text-[15px]" style={{ color: 'var(--ink)' }}>{m}</span>
                  </li>
                ))}
              </ul>
            </section>

            <aside className="pl-3.5 py-1" style={{ borderLeft: '2px solid var(--rule)' }}>
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--muted)' }}>
                Notas
              </div>
              <p className="text-[14px] leading-relaxed mb-2" style={{ color: 'var(--ink)' }}>
                Informações históricas a confirmar.
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                Fotos e vídeos retirados da internet para fins ilustrativos. As cores na tela não
                condizem com a coloração real de um veículo, portanto não devem ser usados como fonte
                para restaurações.
              </p>
            </aside>
          </div>

          {/* Right: photo */}
          <div className="flex flex-col gap-4">
            <PhotoPlaceholder />
          </div>
        </div>

        {/* Full-width video below the notes (only when present) */}
        {color.video && <VideoEmbed id={color.video} />}
      </div>
    </article>
  );
}
