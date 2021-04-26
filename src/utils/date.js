import dayjs from 'dayjs';
import jalali from 'jalali-dayjs';

dayjs.extend(jalali);

export function formatDate(d, format) {
  return dayjs(d).locale('fa').format(format);
}
