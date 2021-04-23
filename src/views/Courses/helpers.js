export const mapCourseTypeToLabel = Object.freeze({
  Asli: 'اصلی',
  Umumi: 'عمومی',
  Paaye: 'پایه',
  Takhasosi: 'اختصاصی',
});

export const genIdForCourse = ({ code, classCode }) => {
  return code + classCode;
};
