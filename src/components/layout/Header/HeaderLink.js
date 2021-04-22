import AppIcon from '@/components/shared/AppIcon';
import { Link } from 'react-router-dom';

const HeaderLink = ({
  label,
  icon = '',
  to,
  children,
  className = '',
  onClick,
}) => {
  const content = (
    <p className="d-inline-flex align-items-center">
      {label ? label : children}
      {icon && <AppIcon icon={icon} className="mr-2" />}
    </p>
  );

  if (to) {
    return (
      <Link to={to} className={`nav-link ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={`nav-link ${className}`}>
      {content}
    </div>
  );
};

export default HeaderLink;
