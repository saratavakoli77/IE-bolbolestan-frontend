import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppInput from '@/components/shared/AppInput';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import $api from '@/api';
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';

const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  studentId: yup.string().required(),
  birthDate: yup.string().required(),
  faculty: yup.string().required(),
  field: yup.string().required(),
  level: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (formData) => {
    setLoading(true);

    try {
      await $api.auth.register(formData);
      toast.success('ثبت نام با موفقیت انجام شد');
      history.push('/login');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <main>
      <h4 className="mb-4 font-weight-bold">ایجاد حساب کاربری</h4>

      <Formik
        validationSchema={formSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          studentId: '',
          birthDate: '',
          faculty: '',
          field: '',
          level: '',
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <AppInput
                  name="firstName"
                  placeholder="نام"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={touched.firstName && !!errors.firstName}
                  errMessage="این فیلد اجباری می‌باشد"
                />
              </div>

              <div className="col">
                <AppInput
                  name="lastName"
                  placeholder="نام خانوادگی"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={touched.lastName && !!errors.lastName}
                  errMessage="این فیلد اجباری می‌باشد"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <AppInput
                  name="studentId"
                  placeholder="شماره دانشجویی"
                  value={values.studentId}
                  onChange={handleChange}
                  isValid={touched.studentId && !errors.studentId}
                  isInvalid={touched.studentId && !!errors.studentId}
                  errMessage="این فیلد اجباری می‌باشد"
                />
              </div>

              <div className="col">
                <AppInput
                  name="birthDate"
                  placeholder="تاریخ تولد"
                  value={values.birthDate}
                  onChange={handleChange}
                  isValid={touched.birthDate && !errors.birthDate}
                  isInvalid={touched.birthDate && !!errors.birthDate}
                  errMessage="این فیلد اجباری می‌باشد"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <AppInput
                  name="field"
                  placeholder="رشته"
                  value={values.field}
                  onChange={handleChange}
                  isValid={touched.field && !errors.field}
                  isInvalid={touched.field && !!errors.field}
                  errMessage="این فیلد اجباری می‌باشد"
                />
              </div>

              <div className="col">
                <AppInput
                  name="faculty"
                  placeholder="دانشکده"
                  value={values.faculty}
                  onChange={handleChange}
                  isValid={touched.faculty && !errors.faculty}
                  isInvalid={touched.faculty && !!errors.faculty}
                  errMessage="این فیلد اجباری می‌باشد"
                />
              </div>

              <div className="col">
                <AppInput
                  name="level"
                  placeholder="مقطع"
                  value={values.level}
                  onChange={handleChange}
                  isValid={touched.level && !errors.level}
                  isInvalid={touched.level && !!errors.level}
                  errMessage="این فیلد اجباری می‌باشد"
                />
              </div>
            </div>

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
              {loading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                'ثبت نام'
              )}
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
