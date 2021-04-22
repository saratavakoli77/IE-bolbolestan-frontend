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
import { useDispatch } from 'react-redux';
import AppInput from '@/components/shared/AppInput';

const formSchema = yup.object().shape({
  studentId: yup.number().required(),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async ({ studentId }) => {
    setLoading(true);

    try {
      await $api.auth.login(studentId);
      const { student } = await $api.auth.fetchProfile();
      dispatch(setUser(student));
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
          studentId: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <AppInput
              name="studentId"
              placeholder="شماره دانشجویی خود را وارد کنید"
              value={values.studentId}
              onChange={handleChange}
              isValid={touched.studentId && !errors.studentId}
              isInvalid={!!errors.studentId}
              errMessage="این فیلد اجباری می‌باشد"
            />
            <AppInput
              name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={values.password}
              onChange={handleChange}
            />
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
