import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppInput from '@/components/shared/AppInput';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import $api from '@/api';

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async ({ email }) => {
    setLoading(true);

    try {
      await $api.auth.forgotPassword(email);
      toast.success('ایمیل تغییر رمز عبور برای شما ارسال شد');
      history.push('/login');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <main>
      <h4 className="mb-4 font-weight-bold">فراموشی رمز عبور</h4>

      <Formik
        validationSchema={formSchema}
        initialValues={{
          email: '',
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
                'تایید'
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default ForgotPassword;
