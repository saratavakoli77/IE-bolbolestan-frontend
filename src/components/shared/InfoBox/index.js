import './styles.scss';

const InfoBox = ({
  tag: Tag = 'div',
  variant,
  children,
  className = '',
  outlined,
  block,
}) => (
  <Tag
    className={`info-box info-box--${variant} ${
      outlined && 'info-box--outlined'
    } ${block && 'info-box--block'} ${className}`}
  >
    {children}
  </Tag>
);

export default InfoBox;
