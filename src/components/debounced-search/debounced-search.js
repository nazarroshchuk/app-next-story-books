import { useEffect, useState } from 'react';

function DebouncedSearch({ time }) {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    let debouncedSearch;

    if (search) {
      debouncedSearch = setTimeout(() => {
        setDebouncedSearch(search);
        console.log('Sending API request', search);
      }, time);
    }

    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [search, time]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input onChange={onChange} value={search} type="text" />
      <p>Search Term: {debouncedSearch}</p>
    </>
  );
}

export default DebouncedSearch;
