import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

export default function UnconfirmedBadge({ className = '', style = {} }) {
  return (
    <span
      role="img"
      aria-label="Não confirmado"
      className={`uc-badge inline-flex items-center justify-center w-4 h-4 rounded-full border cursor-help align-middle ${className}`}
      style={{
        borderColor: 'currentColor',
        lineHeight: 1,
        flexShrink: 0,
        ...style,
      }}
    >
      <FontAwesomeIcon icon={faQuestion} style={{ fontSize: 8 }} />
      <span className="uc-tooltip" role="tooltip">Não confirmado</span>
    </span>
  );
}
