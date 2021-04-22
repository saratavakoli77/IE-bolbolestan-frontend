import Form from 'react-bootstrap/Form';

const AppInput = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  isValid,
  isInvalid,
  errMessage,
}) => (
  <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      isValid={isValid}
      isInvalid={isInvalid}
    />

    {isInvalid && (
      <Form.Control.Feedback type="invalid">{errMessage}</Form.Control.Feedback>
    )}
  </Form.Group>
);

export default AppInput;
