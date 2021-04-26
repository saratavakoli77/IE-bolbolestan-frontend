import './styles.scss';
import { formatFaNumbers } from '@/utils/number';

const LabeledBox = ({
  children,
  label,
  header: Header,
  className,
  footer: Footer,
}) => (
  <div className={`labeled-box ${className}`}>
    <p className="labeled-box__label">{formatFaNumbers(label)}</p>

    {Header && (
      <div className="labeled-box__header">
        <Header />
      </div>
    )}

    {children}

    {Footer && (
      <div className="labeled-box__footer">
        <Footer />
      </div>
    )}
  </div>
);

export default LabeledBox;
