import $api from '@/api';
import AppBtn from '@/components/shared/AppBtn';
import AppIcon from '@/components/shared/AppIcon';
import LoadingContext from '@/contexts/loading';
import { fetchPickedCourses } from '@/store/slices/coursesSlice';
import handleError from '@/utils/handleError';
import { unwrapResult } from '@reduxjs/toolkit';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const PickedCoursesFooter = () => {
  const dispatch = useDispatch();
  const pickedCoursesUnits = useSelector(
    (state) => state.courses.pickedCoursesUnits
  );
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const submit = async () => {
    showLoading();

    try {
      await $api.courses.submitPickedCourses();
      dispatch(fetchPickedCourses());
      toast.success('عملیات با موفقیت انجام شد');
    } catch (err) {
      handleError(err);
    } finally {
      hideLoading();
    }
  };

  const refresh = () => {
    showLoading();

    dispatch(fetchPickedCourses())
      .catch(handleError)
      .finally(() => hideLoading());
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <p className="font-weight-bold text-primary-dark">
        تعداد واحد ثبت شده: {pickedCoursesUnits}
      </p>

      <div className="d-flex">
        <AppBtn variant="gray" icon className="ml-1" onClick={refresh}>
          <AppIcon icon="refresh-arrow" />
        </AppBtn>

        <AppBtn variant="success" wide onClick={submit}>
          ثبت نهایی
        </AppBtn>
      </div>
    </div>
  );
};

export default PickedCoursesFooter;
