import AppIcon from '@/components/shared/AppIcon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilters } from '@/store/slices/coursesSlice';

const SearchCourses = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch(updateFilters({ query }));
  };
  const onInput = (e) => setQuery(e.target.value);

  return (
    <div className="d-flex">
      <div className="search-box d-inline-flex mx-auto">
        <input
          type="text"
          className="search-box__input"
          placeholder="نام درس"
          value={query}
          onInput={onInput}
        />
        <button className="btn btn-success" onClick={onSearch}>
          جستجو
          <AppIcon icon="loupe" className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default SearchCourses;
