import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faXmark, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { modelsForYear } from '../data';
import UnconfirmedBadge from './UnconfirmedBadge';
import InfoBadge from './InfoBadge';

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
      style={{ aspectRatio: '3/2', background: 'var(--surface-soft)' }}
    >
      <div className="flex flex-col items-center gap-2 text-center px-4" style={{ color: 'var(--muted)' }}>
        <FontAwesomeIcon icon={faImage} style={{ fontSize: 26 }} />
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase">{label}</div>
        <div className="font-mono text-[10.5px]">a inserir</div>
      </div>
    </div>
  );
}

function PhotoEmbed({ src, alt, caption }) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  if (failed) return <PhotoPlaceholder />;
  return (
    <>
      <figure className="m-0">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Ampliar foto: ${alt}`}
          className="relative block w-full border border-rule rounded-md overflow-hidden cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-black/15"
          style={{ aspectRatio: '3/2', background: 'var(--surface-soft)' }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </button>
        {caption && (
          <figcaption className="mt-2 text-[11.5px] italic leading-snug" style={{ color: 'var(--muted)' }}>
            {caption}
          </figcaption>
        )}
      </figure>
      {open && createPortal(
        <Lightbox src={src} alt={alt} caption={caption} onClose={() => setOpen(false)} />,
        document.body
      )}
    </>
  );
}

function Lightbox({ src, alt, caption, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 fade-in"
      style={{ background: 'rgba(0,0,0,0.88)' }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        autoFocus
        aria-label="Fechar"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        <FontAwesomeIcon icon={faXmark} style={{ fontSize: 20 }} />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-full object-contain rounded-md shadow-2xl"
      />
      {caption && (
        <figcaption
          onClick={(e) => e.stopPropagation()}
          className="mt-3 max-w-3xl text-center text-[13px] italic text-white/80"
        >
          {caption}
        </figcaption>
      )}
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

export default function DetailCard({ color, year, onShare }) {
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
  const videoIds = color.video
    ? (Array.isArray(color.video) ? color.video : [color.video])
    : [];

  return (
    <article
      key={color.name + year}
      className="fade-in border border-rule rounded-lg overflow-hidden h-full flex flex-col"
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
        <h3 className="text-2xl sm:text-3xl leading-tight tracking-tight font-medium flex items-center flex-wrap gap-x-2.5 gap-y-1">
          <span>{color.name}</span>
          {color.unconfirmed && <UnconfirmedBadge className="w-5 h-5" style={{ fontSize: '12px' }} />}
          {onShare && (
            <button
              type="button"
              onClick={() => onShare(year, color)}
              title="Copiar link desta cor"
              aria-label="Compartilhar esta cor"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
              style={{ color: 'inherit' }}
            >
              <FontAwesomeIcon icon={faShareNodes} style={{ fontSize: 14 }} />
            </button>
          )}
        </h3>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-7 flex flex-col gap-6 flex-1">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: models */}
          <section>
            <h4 className="font-mono text-[11px] tracking-[0.18em] uppercase mb-3 flex items-center gap-1.5" style={{ color: 'var(--muted)' }}>
              Modelos que usavam esta cor
              <InfoBadge text="Informações não oficiais — podem conter imprecisões." />
            </h4>
            <ul className="divide-y divide-rule border-t border-b border-rule">
              {models.map((m) => (
                <li key={m} className="py-2.5">
                  <span className="text-[15px]" style={{ color: 'var(--ink)' }}>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Right: photo */}
          <div className="flex flex-col gap-4">
            {color.photo ? (
              <PhotoEmbed
                src={`${import.meta.env.BASE_URL}photos/${color.photo}`}
                alt={color.photoCaption || `${color.name} — ${year}`}
                caption={color.photoCaption}
              />
            ) : (
              <PhotoPlaceholder />
            )}
          </div>
        </div>

        {/* Full-width video(s), when present */}
        {videoIds.map((id) => (
          <VideoEmbed key={id} id={id} />
        ))}

        {/* Notes pinned to the bottom of the card */}
        <aside className="pl-3.5 py-1 mt-auto" style={{ borderLeft: '2px solid var(--rule)' }}>
          <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--muted)' }}>
            Notas
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            Imagens e vídeos são apenas ilustrativos. As cores exibidas na tela podem diferir da
            cor real do veículo e não devem ser usadas como referência para restaurações.
          </p>
        </aside>
      </div>
    </article>
  );
}
