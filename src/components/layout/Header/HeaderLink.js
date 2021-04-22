import AppIcon from '@/components/shared/AppIcon';

const HeaderLink = ({ label, icon = '', link, children, className = '' }) => {
  return (
    <a href={link} className={`nav-link ${className}`}>
      {label ? label : children}
      {icon && <AppIcon icon={icon} className="mr-2" />}
    </a>
  );
};

export default HeaderLink;