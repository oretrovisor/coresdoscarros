export default function TopStrip() {
  return (
    <div className="border-b border-rule" style={{ background: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-center gap-2">
        <span
          className="font-mono text-[10.5px] tracking-[0.22em] uppercase"
          style={{ color: 'var(--muted)' }}
        >
          Um projeto de
        </span>
        <a
          href="https://oretrovisor.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:opacity-80 transition-opacity"
          aria-label="O Retrovisor"
        >
          <img
            src="https://oretrovisor.com/wp-content/uploads/2015/01/oretrovisor-logo-500px.png"
            alt="O Retrovisor"
            style={{ height: '22px', width: 'auto', display: 'block' }}
          />
        </a>
      </div>
    </div>
  );
}
