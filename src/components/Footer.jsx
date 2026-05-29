export default function Footer() {
  return (
    <>
      {/* Callouts above the footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-12 flex flex-col gap-3">
        {/* Warning: provisional data */}
        <div className="callout-warning rounded-md px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-mono font-semibold shrink-0"
            style={{ background: '#e7d28a', color: '#6b5a16' }}
          >
            !
          </span>
          <p className="text-[12.5px] font-medium leading-relaxed">
            Dados provisórios, ainda em revisão.
          </p>
        </div>

        {/* Info: sources */}
        <div className="callout-info rounded-md px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-mono font-semibold shrink-0"
            style={{ background: '#C9DCEB', color: '#2C4A6B' }}
          >
            i
          </span>
          <p className="text-[12.5px] leading-relaxed">
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
          </p>
        </div>

        {/* Thank-you / inspiration */}
        <div className="callout-thanks rounded-md px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[12px] shrink-0"
            style={{ background: '#D6E6E1', color: '#2E5A55' }}
          >
            {'♥︎'}
          </span>
          <p className="text-[12.5px] leading-relaxed">
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
          </p>
        </div>
      </div>

      <footer className="border-t border-rule mt-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex items-center justify-between gap-4 flex-wrap">
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
