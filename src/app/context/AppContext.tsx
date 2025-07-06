'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { mockApis } from '@/app/data/mockApis';

type ApiConfigMap = Record<string, object>;

type AppContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  selectedApiId: string | null;
  setSelectedApiId: (id: string) => void;
  configMap: ApiConfigMap;
  updateConfig: (id: string, newConfig: object) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedApiId, setSelectedApiId] = useState<string | null>(null);
  const [configMap, setConfigMap] = useState<ApiConfigMap>({});

  // Load from sessionStorage
  useEffect(() => {
    const savedTheme = sessionStorage.getItem('theme');
    const savedApiId = sessionStorage.getItem('selectedApiId');
    const savedConfigs = sessionStorage.getItem('configMap');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
    if (savedApiId) setSelectedApiId(savedApiId);
    if (savedConfigs) setConfigMap(JSON.parse(savedConfigs));
  }, []);

  // Persist on change
  useEffect(() => {
    sessionStorage.setItem('theme', theme);
    if (selectedApiId) sessionStorage.setItem('selectedApiId', selectedApiId);
    sessionStorage.setItem('configMap', JSON.stringify(configMap));
  }, [theme, selectedApiId, configMap]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const updateConfig = (id: string, newConfig: object) => {
    setConfigMap((prev) => ({
      ...prev,
      [id]: newConfig,
    }));
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, selectedApiId, setSelectedApiId, configMap, updateConfig }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
};
