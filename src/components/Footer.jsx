export default function Footer() {
  return (
    <>
      {/* Provisional data callout above footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-12">
        <div className="callout rounded-md px-4 py-3 flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-mono font-semibold shrink-0"
            style={{ background: '#DDDDDD', color: '#555555' }}
          >
            i
          </span>
          <p className="font-mono text-[11.5px] tracking-wide leading-relaxed">
            Dados provisórios · sujeitos a revisão.
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
