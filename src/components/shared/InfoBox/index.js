import './styles.scss';

const InfoBox = ({
  tag: Tag = 'div',
  variant,
  children,
  className = '',
  outlined,
}) => (
  <Tag
    className={`info-box info-box--${variant} ${
      outlined && 'info-box--outlined'
    } ${className}`}
  >
    {children}
  </Tag>
);

export default InfoBox;
