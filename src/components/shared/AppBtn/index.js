import './styles.scss';

const AppBtn = ({ children, className, variant, small, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-${variant} ${small && 'btn--small'} ${
      icon && 'btn--icon'
    } ${className}`}
  >
    {children}
  </button>
);

export default AppBtn;
