import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Small circular icon badge with a hover/focus tooltip.
// Used for "unconfirmed" and "info" markers throughout the detail card and palette.
export default function Badge({ icon, label, wide = false, className = '', style = {} }) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`uc-badge inline-flex items-center justify-center w-4 h-4 rounded-full border cursor-help align-middle ${className}`}
      style={{
        borderColor: 'currentColor',
        lineHeight: 1,
        flexShrink: 0,
        ...style,
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: 8 }} />
      <span className={`uc-tooltip ${wide ? 'uc-tooltip--wide' : ''}`} role="tooltip">{label}</span>
    </span>
  );
}
