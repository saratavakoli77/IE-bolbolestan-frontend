import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import $api from '@/api';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { setUser } from '@/store/slices/userSlice';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppInput from '@/components/shared/AppInput';

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async ({ email, password }) => {
    setLoading(true);

    try {
      await $api.auth.login(email, password);
      const { student, gpa, tpu, courses } = await $api.auth.fetchProfile();
      dispatch(setUser({ ...student, gpa, tpu, courses }));
      history.push('/');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <main>
      <h4 className="mb-4 font-weight-bold">ورود به حساب کاربری</h4>

      <Formik
        validationSchema={formSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <AppInput
              name="email"
              placeholder="ایمیل خود را وارد کنید"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && !!errors.email}
              errMessage="این فیلد اجباری می‌باشد"
            />
            <AppInput
              name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={values.password}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
              isInvalid={touched.password && !!errors.password}
              errMessage="این فیلد اجباری می‌باشد"
            />
            <Button
              variant="primary"
              block
              className="mt-5 text-center"
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

      <div className="text-center mt-3">
        <Link to="/register">ایجاد حساب کاربری</Link>
      </div>
    </main>
  );
};

export default Login;
