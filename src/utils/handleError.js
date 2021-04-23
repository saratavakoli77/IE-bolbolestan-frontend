import { toast } from 'react-toastify';

export default function handleError(err) {
  if (err.errorList) {
    err.errorList.forEach((msg) => toast.error(msg));
  } else {
    toast.error(err.message);
  }
}
