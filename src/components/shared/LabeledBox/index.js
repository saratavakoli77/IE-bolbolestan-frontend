import './styles.scss';

const LabeledBox = ({
  children,
  label,
  header: Header,
  className,
  footer: Footer,
}) => (
  <div className={`labeled-box ${className}`}>
    <p className="labeled-box__label">{label}</p>

    {Header && (
      <div className="labeled-box__header">
        <Header />
      </div>
    )}

    {children}

    {Footer && (
      <div class="labeled-box__footer">
        <Footer />
      </div>
    )}
  </div>
);

export default LabeledBox;
