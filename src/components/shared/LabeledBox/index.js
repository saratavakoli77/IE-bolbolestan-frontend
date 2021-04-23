import './styles.scss';

const LabeledBox = ({ children, label, header: Header, className }) => (
  <div className={`labeled-box ${className}`}>
    <p className="labeled-box__label">{label}</p>

    {Header && (
      <div className="labeled-box__header">
        <Header />
      </div>
    )}

    {children}
  </div>
);

export default LabeledBox;
