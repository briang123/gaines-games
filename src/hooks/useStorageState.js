import { useEffect, useState } from 'react';

export const useStorageState = (key, defaultValue, storageType = 'localStorage') => {
  const [value, setValue] = useState(() => {
    const stickyValue = window[storageType].getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  useEffect(() => {
    window[storageType].setItem(key, JSON.stringify(value));
  }, [key, value, storageType]);

  return [value, setValue];
}

export default useStorageState;
