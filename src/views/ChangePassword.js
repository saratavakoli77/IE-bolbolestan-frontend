import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppInput from '@/components/shared/AppInput';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import $api from '@/api';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const formSchema = yup.object().shape({
  password: yup.string().required(),
});

const ChangePassword = () => {
  const history = useHistory();
  const query = useQuery();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.get('token')) {
      history.push('/');
    }
  }, []);

  const onSubmit = async ({ password }) => {
    setLoading(true);

    try {
      await $api.auth.changePassword(password, query.get('token'));
      toast.success('رمز عبور با موفقیت تغییر کرد');
      history.push('/login');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <main>
      <h4 className="mb-4 font-weight-bold">تغییر رمز عبور</h4>

      <Formik
        validationSchema={formSchema}
        initialValues={{
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <AppInput
              name="password"
              type="password"
              placeholder="رمز عبور جدید را وارد کنید"
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
                'تایید'
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default ChangePassword;
