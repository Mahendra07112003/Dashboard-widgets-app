// // // components/ClientDashboard.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { ExternalLink } from 'lucide-react';
// import { useDashboardStore } from '../store/dashboardStore';
// import { ToastProvider, useToast } from './ToastContext';
// import CategorySection from './CategorySection';
// import SearchBar from './SearchBar';
// import AddWidgetDialog from './AddWidgetDialog';
// // import ExportImportButtons from './ExportImportButtons';
// import ExportImportButtons from './ExportImportButtons';

// function DashboardContent() {
//   const { categories, addWidget, removeWidget } = useDashboardStore();
//   const { showToast } = useToast();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [dialogState, setDialogState] = useState<{
//     isOpen: boolean;
//     categoryId: string;
//     categoryName: string;
//   }>({
//     isOpen: false,
//     categoryId: '',
//     categoryName: ''
//   });

//   const handleAddWidget = (categoryId: string, categoryName: string) => {
//     setDialogState({
//       isOpen: true,
//       categoryId,
//       categoryName
//     });
//   };

//   const handleCloseDialog = () => {
//     setDialogState({
//       isOpen: false,
//       categoryId: '',
//       categoryName: ''
//     });
//   };

//   const handleSubmitWidget = (name: string, text: string) => {
//     addWidget(dialogState.categoryId, { name, text });
//     showToast('success', `Widget "${name}" added successfully!`);
//   };

//   const handleRemoveWidget = (categoryId: string, widgetId: string, widgetName: string) => {
//     removeWidget(categoryId, widgetId);
//     showToast('success', `Widget "${widgetName}" Deleted!`);
//   };

//   // Filter categories based on search
//   const filteredCategories = searchQuery
//     ? categories.map(category => ({
//         ...category,
//         widgets: category.widgets.filter(widget =>
//           widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           widget.text.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       })).filter(category => category.widgets.length > 0)
//     : categories;

//   const totalWidgets = categories.reduce((total, category) => total + category.widgets.length, 0);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <div className="flex items-start justify-between mb-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 Dashboard
//               </h1>
//               <p className="text-gray-600">
//                 Manage your widgets and monitor your data ({totalWidgets} widgets total)
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <ExportImportButtons />
//               <Link
//                 href="/widgets"
//                 className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
//               >
//                 <ExternalLink size={16} />
//                 All Widgets
//               </Link>
//             </div>
//           </div>
//         </div>

//         <SearchBar
//           value={searchQuery}
//           onChange={setSearchQuery}
//           placeholder="Search all widgets..."
//         />

//         <div className="space-y-8">
//           {filteredCategories.map((category) => (
//             <CategorySection
//               key={category.id}
//               category={category}
//               onRemoveWidget={(widgetId) => {
//                 const widget = category.widgets.find(w => w.id === widgetId);
//                 handleRemoveWidget(category.id, widgetId, widget?.name || 'Widget');
//               }}
//               onAddWidget={() => handleAddWidget(category.id, category.name)}
//             />
//           ))}
//         </div>

//         {filteredCategories.length === 0 && searchQuery && (
//           <div className="text-center py-16">
//             <div className="max-w-md mx-auto">
//               <div className="text-6xl mb-4">🔍</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 No widgets found
//               </h3>
//               <p className="text-gray-500">
//                 No widgets match your search for "{searchQuery}". Try a different search term.
//               </p>
//             </div>
//           </div>
//         )}

//         {categories.every(cat => cat.widgets.length === 0) && !searchQuery && (
//           <div className="text-center py-16">
//             <div className="max-w-md mx-auto">
//               <div className="text-6xl mb-4">📊</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Welcome to your Dashboard
//               </h3>
//               <p className="text-gray-500 mb-6">
//                 Start by adding your first widget to any category above.
//               </p>
//             </div>
//           </div>
//         )}

//         <AddWidgetDialog
//           isOpen={dialogState.isOpen}
//           onClose={handleCloseDialog}
//           onAdd={handleSubmitWidget}
//           categoryName={dialogState.categoryName}
//         />
//       </div>
//     </div>
//   );
// }

// export default function ClientDashboard() {
//   return (
//     <ToastProvider>
//       <DashboardContent />
//     </ToastProvider>
//   );
// }


// components/ClientDashboard.tsx - Fixed Implementation
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { useDashboardStore } from '../store/dashboardStore';
import { ToastProvider, useToast } from './ToastContext';
import CategorySection from './CategorySection';
import SearchBar from './SearchBar';
import AddWidgetDialog from './AddWidgetDialog';
import ExportImportButtons from './ExportImportButtons';

function DashboardContent() {
  const { categories, addWidget, removeWidget, getAllWidgets } = useDashboardStore();
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean;
    categoryId: string;
    categoryName: string;
  }>({
    isOpen: false,
    categoryId: '',
    categoryName: ''
  });

  const handleAddWidget = (categoryId: string, categoryName: string) => {
    setDialogState({
      isOpen: true,
      categoryId,
      categoryName
    });
  };

  const handleCloseDialog = () => {
    setDialogState({
      isOpen: false,
      categoryId: '',
      categoryName: ''
    });
  };

  const handleSubmitWidget = (name: string, text: string) => {
    addWidget(dialogState.categoryId, { name, text });
    showToast('success', `Widget "${name}" added successfully!`);
  };

  const handleRemoveWidget = (categoryId: string, widgetId: string, widgetName: string) => {
    removeWidget(categoryId, widgetId);
    showToast('success', `Widget "${widgetName}" Deleted!`);
  };

  // Get all widgets and filter by search query
  const allWidgets = getAllWidgets();
  
  // Filter categories based on search - use getAllWidgets to avoid type issues
  const filteredCategories = searchQuery
    ? categories.map(category => {
        const categoryWidgets = allWidgets.filter(widget => 
          widget.categoryId === category.id &&
          (widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           widget.text.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return {
          ...category,
          widgets: categoryWidgets
        };
      }).filter(category => category.widgets.length > 0)
    : categories.map(category => ({
        ...category,
        widgets: allWidgets.filter(widget => widget.categoryId === category.id)
      }));

  const totalWidgets = allWidgets.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your widgets and monitor your data ({totalWidgets} widgets total)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ExportImportButtons />
              <Link
                href="/widgets"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <ExternalLink size={16} />
                All Widgets
              </Link>
            </div>
          </div>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search all widgets..."
        />

        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              onRemoveWidget={(widgetId) => {
                const widget = allWidgets.find(w => w.id === widgetId);
                handleRemoveWidget(category.id, widgetId, widget?.name || 'Widget');
              }}
              onAddWidget={() => handleAddWidget(category.id, category.name)}
            />
          ))}
        </div>

        {filteredCategories.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No widgets found
              </h3>
              <p className="text-gray-500">
                {/* No widgets match your search for "{searchQuery}". Try a different search term. */}
                No widgets match your search for &quot;{searchQuery}&quot;. Try a different search term.
              </p>
            </div>
          </div>
        )}

        {allWidgets.length === 0 && !searchQuery && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Welcome to your Dashboard
              </h3>
              <p className="text-gray-500 mb-6">
                Start by adding your first widget to any category above.
              </p>
            </div>
          </div>
        )}

        <AddWidgetDialog
          isOpen={dialogState.isOpen}
          onClose={handleCloseDialog}
          onAdd={handleSubmitWidget}
          categoryName={dialogState.categoryName}
        />
      </div>
    </div>
  );
}

export default function ClientDashboard() {
  return (
    <ToastProvider>
      <DashboardContent />
    </ToastProvider>
  );
}