export default function Logo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <rect x="0.7" y="0.7" width="34.6" height="34.6" rx="6" fill="#ffffff" stroke="#222222" strokeWidth="1.4" />
      <rect x="5"   y="6"   width="26" height="6" rx="1.5" fill="#1c7870" />
      <rect x="5"   y="15"  width="26" height="6" rx="1.5" fill="#222222" />
      <rect x="5"   y="24"  width="26" height="6" rx="1.5" fill="#FFE8A8" stroke="#e7d28a" strokeWidth="0.6" />
    </svg>
  );
}
