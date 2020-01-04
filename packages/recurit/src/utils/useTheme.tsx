import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

type UseThemeHandler = () => readonly [Theme, () => void];

export const useTheme: UseThemeHandler = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(
      theme === 'light' ? 'dark' : 'light',
    );
  };

  useEffect(
    () => {
      const localTheme = window.localStorage.getItem('theme') as Theme;
      if (localTheme) {
        setTheme(localTheme);
      }
    },
    [],
  );

  useEffect(
    () => window.localStorage.setItem('theme', theme),
    [theme],
  );

  return [theme, toggleTheme];
};

export default useTheme;
