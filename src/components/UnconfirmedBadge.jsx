export default function UnconfirmedBadge({ className = '', style = {} }) {
  return (
    <span
      role="img"
      aria-label="Não confirmado"
      className={`uc-badge inline-flex items-center justify-center w-4 h-4 rounded-full border cursor-help align-middle ${className}`}
      style={{
        borderColor: 'currentColor',
        fontSize: '10px',
        lineHeight: 1,
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        flexShrink: 0,
        ...style,
      }}
    >
      ?
      <span className="uc-tooltip" role="tooltip">Não confirmado</span>
    </span>
  );
}
