'use client';
import { useAppContext } from '@/app/context/AppContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded bg-gray-300 dark:bg-gray-700"
    >
      Toggle {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}
