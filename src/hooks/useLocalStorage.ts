import { useEffect } from 'react';

export const useLocalStorage = (
  key: string,
  value: number,
  setValue: (value: number) => void,
  initValue: number
) => {
  useEffect(() => {
    try {
      const localStorageValue = localStorage.getItem(key);

      if (localStorageValue) {
        setValue(Number(JSON.parse(localStorageValue)));
      } else {
        localStorage.setItem(key, JSON.stringify(initValue));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }, [value]);
};
