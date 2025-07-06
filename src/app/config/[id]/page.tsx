'use client';

import { useParams } from 'next/navigation';
import { mockApis } from '@/app/data/mockApis';
import ConfigEditor from '@/components/configeditor/page';
import { useAppContext } from '@/app/context/AppContext';
import { useEffect } from 'react';

const ConfigPage = () => {
  const { id } = useParams();
  const { configMap, updateConfig, setSelectedApiId } = useAppContext();

  const api = mockApis.find((a) => a.id === id);
  const savedConfig = configMap[id as string] || api?.config;

  useEffect(() => {
    if (typeof id === 'string') {
      setSelectedApiId(id);
    }
  }, [id, setSelectedApiId]);

  if (!api) return <div>API not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{api.name} Configuration</h1>
      <ConfigEditor
        config={savedConfig}
        onSave={(updated: any) => updateConfig(api.id, updated)}
      />
    </div>
  );
};

export default ConfigPage;
