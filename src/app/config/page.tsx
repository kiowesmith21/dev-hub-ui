'use client';

import { useRouter } from 'next/navigation';
import { mockApis } from '@/app/data/mockApis';
import { useAppContext } from '@/app/context/AppContext';

const ConfigHome = () => {
  const router = useRouter();
  const { setSelectedApiId } = useAppContext();

  const handleSelect = (id: string) => {
    setSelectedApiId(id);
    router.push(`/config/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Select an API to Configure</h1>
      <ul className="space-y-2">
        {mockApis.map((api) => (
          <li key={api.id}>
            <button
              onClick={() => handleSelect(api.id)}
              className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              {api.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfigHome;
