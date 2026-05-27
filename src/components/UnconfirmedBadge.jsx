export default function UnconfirmedBadge({ className = '', style = {} }) {
  return (
    <span
      title="Não confirmado"
      aria-label="Não confirmado"
      role="img"
      className={`inline-flex items-center justify-center w-4 h-4 rounded-full border cursor-help align-middle ${className}`}
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
    </span>
  );
}
