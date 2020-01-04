import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

type UseTheme = () => readonly [Theme, () => void];

export const useTheme: UseTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(
      theme === 'light' ? 'dark' : 'light',
    );
  };

  useEffect(
    () => window.localStorage.setItem('theme', theme),
    [theme],
  );

  useEffect(
    () => {
      const localTheme = window.localStorage.getItem('theme') as Theme;
      if (localTheme) {
        setTheme(localTheme);
      }
    },
    [],
  );

  return [theme, toggleTheme];
};

export default useTheme;
