import { useState, useMemo, useEffect } from 'react';
import { DATA, YEARS } from './data';
import TopStrip from './components/TopStrip';
import Header from './components/Header';
import Selectors from './components/Selectors';
import ColorGrid from './components/ColorGrid';
import DetailCard from './components/DetailCard';
import Footer from './components/Footer';

export default function App() {
  const [brand, setBrand] = useState('Chrysler do Brasil');
  const [year, setYear] = useState(1970);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const colors = useMemo(() => DATA[year] || [], [year]);

  // Reset color selection when year changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [year]);

  const selectedColor = colors[selectedIndex] || null;

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
          <DetailCard color={selectedColor} year={year} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
