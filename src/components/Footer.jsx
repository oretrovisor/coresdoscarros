import { faExclamation, faInfo, faHeart } from '@fortawesome/free-solid-svg-icons';
import { catalogStats } from '../data';
import Callout from './Callout';

function pct(n, total) {
  if (!total) return 0;
  return Math.round((n / total) * 100);
}

function StatBar({ value, label, percent, tone, showPercent = true }) {
  const fill = tone === 'brand' ? '#1F7770' : '#ECE1A8';
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <div className="min-w-0 flex items-baseline gap-2">
          <span className="font-mono text-[14px] font-semibold tabular-nums" style={{ color: 'var(--ink)' }}>
            {value}
          </span>
          <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase truncate" style={{ color: 'var(--muted)' }}>
            {label}
          </span>
        </div>
        {showPercent && (
          <span className="font-mono text-[10.5px] tabular-nums shrink-0" style={{ color: 'var(--muted)' }}>
            {percent}%
          </span>
        )}
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: '#EFEFEF' }}>
        <div className="h-full rounded-full transition-all" style={{ background: fill, width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default function Footer() {
  const stats = catalogStats();
  return (
    <>
      {/* Catalog progress stats */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-14 sm:mt-16">
        <div className="border border-rule rounded-md px-6 sm:px-10 py-7 sm:py-9" style={{ background: 'var(--paper)' }}>
          <h3 className="text-center text-lg sm:text-xl font-medium mb-6 sm:mb-8" style={{ color: 'var(--ink)' }}>
            Chrysler do Brasil
          </h3>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-10">
            <StatBar value={stats.colors} label="Cores catalogadas" percent={100} tone="brand" showPercent={false} />
            <StatBar value={stats.photos} label="Com foto" percent={pct(stats.photos, stats.colors)} tone="cream" />
            <StatBar value={stats.videos} label="Com vídeo" percent={pct(stats.videos, stats.colors)} tone="cream" />
          </div>
        </div>
      </div>

      {/* Callouts above the footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-14 sm:mt-16 flex flex-col gap-3">
        <Callout tone="warning" icon={faExclamation}>
          <p className="font-medium">Dados atualizados continuamente e sujeitos a correções.</p>
        </Callout>

        <Callout tone="info" icon={faInfo}>
          As informações foram compiladas a partir de fontes na internet, principalmente a{' '}
          <a
            className="callout-info-link"
            href="https://www.chryslerclube.com.br/frisinho-cores.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            tabela de cores do Chrysler Clube
          </a>{' '}
          e{' '}
          <a
            className="callout-info-link"
            href="https://www.instagram.com/p/B-H9MvjACgl"
            target="_blank"
            rel="noopener noreferrer"
          >
            esta publicação de @chryslerdobrasil no Instagram
          </a>
          .
        </Callout>

        <Callout tone="thanks" icon={faHeart}>
          O projeto se inspira na{' '}
          <a
            className="callout-thanks-link"
            href="https://www.youtube.com/@agbadolato/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            coleção do AGBadolato
          </a>
          , que faz um belíssimo trabalho de preservação da memória da indústria automobilística brasileira.
        </Callout>
      </div>

      <footer className="border-t border-rule mt-12 sm:mt-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex flex-col items-center text-center gap-3 sm:flex-row sm:justify-between sm:text-left sm:gap-4 sm:flex-wrap">
          <div
            className="font-mono text-[10.5px] tracking-[0.18em] uppercase"
            style={{ color: 'var(--muted)' }}
          >
            © 2026 Cores dos Carros
          </div>
          <a
            href="https://oretrovisor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            aria-label="O Retrovisor"
          >
            <span
              className="font-mono text-[10.5px] tracking-[0.22em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              Um projeto de
            </span>
            <img
              src="https://oretrovisor.com/wp-content/uploads/2015/01/oretrovisor-logo-500px.png"
              alt="O Retrovisor"
              style={{ height: '26px', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
            />
          </a>
        </div>
      </footer>
    </>
  );
}
