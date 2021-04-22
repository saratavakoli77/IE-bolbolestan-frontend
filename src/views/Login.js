import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import $api from '@/api';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { setUser } from '@/store/slices/userSlice';
import { useHistory } from 'react-router-dom';

const formSchema = yup.object().shape({
  studentId: yup.number().required(),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async ({ studentId }) => {
    setLoading(true);

    try {
      await $api.auth.login(studentId);
      const { student } = await $api.auth.fetchProfile();
      setUser(student);
      history.push('/');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h4 className="mb-4 font-weight-bold">ورود به حساب کاربری</h4>

      <Formik
        validationSchema={formSchema}
        initialValues={{
          studentId: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="studentId">
              <Form.Label>شماره دانشجویی</Form.Label>
              <Form.Control
                type="text"
                placeholder="شماره دانشجویی خود را وارد کنید"
                name="studentId"
                value={values.studentId}
                onChange={handleChange}
                isValid={touched.studentId && !errors.studentId}
                isInvalid={!!errors.studentId}
              />
              {errors.studentId && (
                <Form.Control.Feedback type="invalid">
                  لطفا شماره دانشجویی خود را وارد کنید
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>رمز عبور</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="رمز عبور خود را وارد کنید"
              />
            </Form.Group>
            <Button
              variant="primary"
              block
              className="mt-5"
              type="submit"
              disabled={!isValid || loading}
            >
              {loading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                'ورود'
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Login;
