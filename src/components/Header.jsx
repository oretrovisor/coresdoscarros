import Logo from './Logo';

export default function Header() {
  return (
    <header className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 sm:py-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={34} />
          <h1 className="brand-title text-[34px] sm:text-[44px] leading-none" style={{ color: 'var(--ink)' }}>
            Cores dos Carros
          </h1>
        </div>
        <button
          type="button"
          className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase rounded-full px-4 py-2 transition-colors border border-rule bg-white hover:bg-[#f6f6f3]"
          style={{ color: 'var(--ink)' }}
        >
          Contato
        </button>
      </div>
    </header>
  );
}
