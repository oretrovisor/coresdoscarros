import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Shared visual shell for the small icon-badge + text callouts used across
// the footer (warning / sources / thanks) and the palette (year notes).
const TONES = {
  warning: { wrapper: 'callout-warning', iconBg: '#e7d28a', iconColor: '#6b5a16' },
  info: { wrapper: 'callout-info', iconBg: '#C9DCEB', iconColor: '#2C4A6B' },
  thanks: { wrapper: 'callout-thanks', iconBg: '#D6E6E1', iconColor: '#2E5A55' },
};

export default function Callout({ tone, icon, className = '', children }) {
  const t = TONES[tone];
  return (
    <div className={`${t.wrapper} rounded-md px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0"
        style={{ background: t.iconBg, color: t.iconColor }}
      >
        <FontAwesomeIcon icon={icon} style={{ fontSize: 10 }} />
      </span>
      <div className="text-[12.5px] leading-relaxed">{children}</div>
    </div>
  );
}
