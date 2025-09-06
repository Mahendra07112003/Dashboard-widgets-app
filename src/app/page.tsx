

// // app/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useDashboardStore } from '../store/dashboardStore';
// import CategorySection from '../components/CategorySection';
// import SearchBar from '../components/SearchBar';
// import AddWidgetDialog from '../components/AddWidgetDialog';

// export default function Dashboard() {
//   const { categories, addWidget, removeWidget, searchWidgets } = useDashboardStore();
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

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Dashboard
//           </h1>
//           <p className="text-gray-600">
//             Manage your widgets and monitor your data
//           </p>
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
//               onRemoveWidget={(widgetId) => removeWidget(category.id, widgetId)}
//               onAddWidget={() => handleAddWidget(category.id, category.name)}
//             />
//           ))}
//         </div>

//         {filteredCategories.length === 0 && searchQuery && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">
//               No widgets found matching "{searchQuery}"
//             </p>
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


// app/page.tsx
import ClientDashboard from '../components/ClientDashboard';

export default function Dashboard() {
  return <ClientDashboard />;
}