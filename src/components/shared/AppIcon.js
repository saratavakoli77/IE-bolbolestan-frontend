const AppIcon = ({ icon, className = '', onClick = () => {} }) => {
  return <i className={`flaticon-${icon} ${className}`} onClick={onClick}></i>;
};

export default AppIcon;
