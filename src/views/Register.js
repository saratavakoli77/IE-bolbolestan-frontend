import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppInput from '@/components/shared/AppInput';
import { Link } from 'react-router-dom';

const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Register = () => {
  return (
    <main>
      <h4 className="mb-4 font-weight-bold">ایجاد حساب کاربری</h4>

      <Formik
        validationSchema={formSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={console.log}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <AppInput
              name="firstName"
              placeholder="نام خود را وارد کنید"
              value={values.firstName}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
              isInvalid={touched.firstName && !!errors.firstName}
              errMessage="این فیلد اجباری می‌باشد"
            />

            <AppInput
              name="lastName"
              placeholder="نام خانوادگی خود را وارد کنید"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
              isInvalid={touched.lastName && !!errors.lastName}
              errMessage="این فیلد اجباری می‌باشد"
            />

            <AppInput
              name="email"
              placeholder="ایمیل خود را وارد کنید"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && !!errors.email}
              errMessage="ایمیل خود را به درستی وارد کنید"
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
              className="mt-5"
              type="submit"
              disabled={!isValid}
            >
              ثبت نام
            </Button>
          </Form>
        )}
      </Formik>

      <div className="text-center mt-3">
        <Link to="/login">ورود به حساب کاربری</Link>
      </div>
    </main>
  );
};

export default Register;
