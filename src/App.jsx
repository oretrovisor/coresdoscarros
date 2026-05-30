import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { DATA, YEARS, slugify, findColorIndexBySlug } from './data';
import TopStrip from './components/TopStrip';
import Header from './components/Header';
import Selectors from './components/Selectors';
import ColorGrid from './components/ColorGrid';
import DetailCard from './components/DetailCard';
import Footer from './components/Footer';

// #1971/amarelo-boreal  ->  { year: 1971, index: <n> }   or null
function parseHash() {
  const m = window.location.hash.match(/^#(\d{4})\/(.+)$/);
  if (!m) return null;
  const year = Number(m[1]);
  const idx = findColorIndexBySlug(year, decodeURIComponent(m[2]));
  if (idx < 0) return null;
  return { year, index: idx };
}

// Random {year, index} across the entire archive.
function randomSelection() {
  const year = YEARS[Math.floor(Math.random() * YEARS.length)];
  const list = DATA[year] || [];
  const index = list.length ? Math.floor(Math.random() * list.length) : 0;
  return { year, index };
}

function buildHash(year, color) {
  return `#${year}/${slugify(color.name)}`;
}

function buildShareUrl(year, color) {
  return `${window.location.origin}${window.location.pathname}${buildHash(year, color)}`;
}

export default function App() {
  // Hash wins (shared link); otherwise pick a random color across the archive.
  const initial =
    (typeof window !== 'undefined' && parseHash()) || randomSelection();
  const [brand, setBrand] = useState('Chrysler do Brasil');
  const [year, setYearState] = useState(initial.year);
  const [selectedIndex, setSelectedIndex] = useState(initial.index);
  const [toastMsg, setToastMsg] = useState(null);

  // Year change from UI: reset color to first entry.
  const setYear = useCallback((y) => {
    setYearState(y);
    setSelectedIndex(0);
  }, []);

  const colors = useMemo(() => DATA[year] || [], [year]);
  const selectedColor = colors[selectedIndex] || null;

  // Sync URL hash whenever the selection changes (skip the very first render,
  // so a fresh visit doesn't pollute the URL until the user does something).
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!selectedColor) return;
    const next = buildHash(year, selectedColor);
    if (window.location.hash !== next) {
      window.history.replaceState(null, '', next);
    }
  }, [year, selectedColor]);

  // React to back/forward / manual hash edits.
  useEffect(() => {
    function onHashChange() {
      const parsed = parseHash();
      if (parsed) {
        setYearState(parsed.year);
        setSelectedIndex(parsed.index);
      }
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Toast helper
  const toastTimer = useRef(null);
  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(null), 1800);
  }, []);

  // Share / copy link for a given color
  const shareColor = useCallback(
    async (yr, color) => {
      const url = buildShareUrl(yr, color);
      if (navigator.share) {
        try {
          await navigator.share({ title: `Cores dos Carros — ${color.name}`, url });
          return;
        } catch {
          // user cancelled or share rejected; fall through to clipboard
        }
      }
      try {
        await navigator.clipboard.writeText(url);
        showToast('Link copiado!');
      } catch {
        showToast('Não foi possível copiar o link.');
      }
    },
    [showToast]
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--paper)' }}>
      <TopStrip />
      <Header />
      <Selectors brand={brand} setBrand={setBrand} year={year} setYear={setYear} />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-7 sm:py-10 grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <ColorGrid
            year={year}
            colors={colors}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
          />
          <DetailCard color={selectedColor} year={year} onShare={shareColor} />
        </div>
      </main>

      <Footer />

      {toastMsg &&
        createPortal(
          <div
            role="status"
            aria-live="polite"
            className="fixed left-1/2 -translate-x-1/2 z-[60] fade-in"
            style={{ bottom: '24px' }}
          >
            <div
              className="px-4 py-2.5 rounded-full text-[13px] text-white shadow-lg"
              style={{ background: '#222222' }}
            >
              {toastMsg}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
