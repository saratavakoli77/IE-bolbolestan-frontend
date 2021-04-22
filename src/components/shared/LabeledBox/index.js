import './styles.scss';

const LabeledBox = ({ children, label }) => (
  <div className="labeled-box">
    <p className="labeled-box__label">{label}</p>
    {children}
  </div>
);

export default LabeledBox;
