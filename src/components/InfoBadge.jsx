import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

export default function InfoBadge({ text, className = '', style = {} }) {
  return (
    <span
      role="img"
      aria-label={text}
      className={`uc-badge inline-flex items-center justify-center w-4 h-4 rounded-full border cursor-help align-middle ${className}`}
      style={{
        borderColor: 'currentColor',
        lineHeight: 1,
        flexShrink: 0,
        ...style,
      }}
    >
      <FontAwesomeIcon icon={faInfo} style={{ fontSize: 8 }} />
      <span className="uc-tooltip uc-tooltip--wide" role="tooltip">{text}</span>
    </span>
  );
}
