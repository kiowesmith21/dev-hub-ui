import { useState } from "react";

type ConfigEditorProps = {
  config: object;
  onSave: (updatedConfig: object) => void; //a function to call when the config is "saved" (e.g. logs or updates state in parent).
};

const ConfigEditor = ({ config, onSave }: ConfigEditorProps) => {
  const [configText, setConfigText] = useState(JSON.stringify(config, null, 2)); //formats it with indentation for readability.
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(configText); //convert the string back to json object
      setError(null);
      onSave(parsed); // Simulate save action |  If parsing succeeds, clear the error and pass the new object back to the parent via onSave
    } catch (err) {
      setError("Invalid JSON format.");
    }
  };

  return (
    <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Edit Config</h2>
      <textarea
        className="w-full h-60 p-2 text-sm font-mono bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded"
        value={configText}
        onChange={(e) => setConfigText(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>} 
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
};

export default ConfigEditor;
