

// components/AddWidgetDialog.tsx
import { useState } from 'react';
import { X } from 'lucide-react';

interface AddWidgetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, text: string) => void;
  categoryName: string;
}

export default function AddWidgetDialog({ isOpen, onClose, onAdd, categoryName }: AddWidgetDialogProps) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (widgetName.trim() && widgetText.trim()) {
      onAdd(widgetName.trim(), widgetText.trim());
      setWidgetName('');
      setWidgetText('');
      onClose();
    }
  };

  const handleClose = () => {
    setWidgetName('');
    setWidgetText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Add Widget to {categoryName}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="widgetName" className="block text-sm font-medium text-gray-700 mb-2">
              Widget Name
            </label>
            <input
              type="text"
              id="widgetName"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter widget name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="widgetText" className="block text-sm font-medium text-gray-700 mb-2">
              Widget Content
            </label>
            <textarea
              id="widgetText"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Enter widget content (use line breaks for multiple lines)"
              required
            />
          </div>
          
          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Widget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}