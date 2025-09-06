// components/ExportImportButtons.tsx
'use client';

import { useRef } from 'react';
import { Download, Upload } from 'lucide-react';
import { useDashboardStore } from '../store/dashboardStore';
import { useToast } from './ToastContext';

export default function ExportImportButtons() {
  const { categories } = useDashboardStore();
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const exportData = () => {
    try {
      const dataStr = JSON.stringify(categories, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `dashboard-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast('success', 'Dashboard data exported successfully!');
    } catch (error) {
      showToast('error', 'Failed to export dashboard data');
    }
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);
        // Validate the data structure
        if (Array.isArray(jsonData) && jsonData.every(cat => 
          cat.id && cat.name && Array.isArray(cat.widgets)
        )) {
          // Update the store with imported data
          const store = useDashboardStore.getState();
          store.categories = jsonData;
          // Trigger a re-render by calling setState
          useDashboardStore.setState({ categories: jsonData });
          showToast('success', 'Dashboard data imported successfully!');
        } else {
          showToast('error', 'Invalid file format');
        }
      } catch (error) {
        showToast('error', 'Failed to parse imported file');
      }
    };
    reader.readAsText(file);
    
    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={exportData}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        title="Export dashboard data"
      >
        <Download size={16} />
        Export
      </button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={importData}
        className="hidden"
      />
      
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        title="Import dashboard data"
      >
        <Upload size={16} />
        Import
      </button>
    </div>
  );
}