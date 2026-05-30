import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import UnconfirmedBadge from './UnconfirmedBadge';

function ColorCard({ color, year, selected, onSelect, onShare }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      data-selected={selected}
      className="color-card cursor-pointer text-left w-full border border-rule rounded-lg px-3 py-2.5 sm:px-3.5 sm:py-3 flex items-center gap-3 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-black/15"
      style={{ background: 'var(--surface-soft)' }}
    >
      <span
        aria-hidden="true"
        className="swatch-ring shrink-0 w-9 h-9 rounded-md"
        style={{ background: color.hex }}
      />
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5">
          <span className="text-[14.5px] font-medium leading-snug" style={{ color: 'var(--ink)' }}>
            {color.name}
          </span>
          {color.unconfirmed && <UnconfirmedBadge style={{ color: 'var(--muted)' }} />}
        </span>
        <span className="block font-mono text-[10.5px] tracking-wider mt-0.5" style={{ color: 'var(--muted)' }}>
          {color.code}
        </span>
      </span>
      <span className="shrink-0 flex items-center gap-2" style={{ color: 'var(--muted)' }}>
        {color.photo && (
          <span title="Tem foto" aria-label="Tem foto" className="inline-flex">
            <FontAwesomeIcon icon={faCamera} style={{ fontSize: 13 }} />
          </span>
        )}
        {color.video && (
          <span title="Tem vídeo" aria-label="Tem vídeo" className="inline-flex">
            <FontAwesomeIcon icon={faVideo} style={{ fontSize: 13 }} />
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onShare(year, color);
          }}
          onKeyDown={(e) => e.stopPropagation()}
          title="Copiar link desta cor"
          aria-label="Compartilhar esta cor"
          className="inline-flex items-center justify-center w-6 h-6 rounded hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
        >
          <FontAwesomeIcon icon={faShareNodes} style={{ fontSize: 12 }} />
        </button>
      </span>
    </div>
  );
}

export default function ColorGrid({ year, colors, selectedIndex, onSelect, onShare }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-lg sm:text-xl tracking-tight font-medium" style={{ color: 'var(--ink)' }}>
          Linha {year}
        </h2>
        <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: 'var(--muted)' }}>
          {colors.length} cores
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2.5">
        {colors.map((c, i) => (
          <ColorCard
            key={c.name + i}
            color={c}
            year={year}
            selected={i === selectedIndex}
            onSelect={() => onSelect(i)}
            onShare={onShare}
          />
        ))}
      </div>
    </section>
  );
}
