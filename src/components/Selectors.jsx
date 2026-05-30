import { YEARS } from '../data';

// Group years into decade buckets so each decade gets its own row.
function groupByDecade(years) {
  const buckets = new Map();
  for (const y of years) {
    const decade = Math.floor(y / 10) * 10;
    if (!buckets.has(decade)) buckets.set(decade, []);
    buckets.get(decade).push(y);
  }
  return Array.from(buckets.entries()).sort(([a], [b]) => a - b);
}

export default function Selectors({ brand, setBrand, year, setYear }) {
  const decades = groupByDecade(YEARS);

  return (
    <section className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 sm:py-6 grid gap-5 lg:gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] items-start">
        {/* Marca */}
        <div>
          <label
            htmlFor="marca"
            className="block font-mono text-[10.5px] tracking-[0.18em] uppercase mb-2"
            style={{ color: 'var(--muted)' }}
          >
            Marca
          </label>
          <select
            id="marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="archival w-full border border-rule rounded-md px-3.5 py-2.5 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30"
            style={{ color: 'var(--ink)' }}
          >
            <option>Chrysler do Brasil</option>
          </select>
        </div>

        {/* Ano */}
        <div>
          <div className="mb-2">
            <label
              className="font-mono text-[10.5px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              Ano
            </label>
          </div>

          {/* Mobile: native select */}
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="archival sm:hidden w-full border border-rule rounded-md px-3.5 py-2.5 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30"
            style={{ color: 'var(--ink)' }}
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>

          {/* Desktop: year pills — one row per decade */}
          <div className="hidden sm:flex sm:flex-col gap-1.5">
            {decades.map(([decade, years]) => (
              <div key={decade} className="flex flex-wrap gap-1.5">
                {years.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    data-active={y === year}
                    className="year-pill font-mono text-[12.5px] tracking-wide border border-rule rounded-md px-2.5 py-1.5 bg-white hover:bg-[#F2F2F2] transition-colors"
                    style={{ color: 'var(--ink)' }}
                  >
                    {y}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
