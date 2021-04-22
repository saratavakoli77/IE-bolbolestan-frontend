import AppIcon from '@/components/shared/AppIcon';

const HeaderLink = ({ label, icon = '', to, children, className = '' }) => {
  return (
    <a href={to} className={`nav-link ${className}`}>
      {label ? label : children}
      {icon && <AppIcon icon={icon} className="mr-2" />}
    </a>
  );
};

export default HeaderLink;
