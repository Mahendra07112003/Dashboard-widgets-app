
// // components/CategorySection.tsx
// import { Plus } from 'lucide-react';
// import { Category } from '../types';
// import WidgetCard from './WidgetCard';

// interface CategorySectionProps {
//   category: Category;
//   onRemoveWidget: (widgetId: string) => void;
//   onAddWidget: () => void;
// }

// export default function CategorySection({ category, onRemoveWidget, onAddWidget }: CategorySectionProps) {
//   return (
//     <div className="mb-8">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-900">
//           {category.name}
//         </h2>
//         <button
//           onClick={onAddWidget}
//           className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
//         >
//           <Plus size={16} />
//           Add Widget
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {category.widgets.map((widget) => (
//           <WidgetCard
//             key={widget.id} 
//             widget={widget}
//             onRemove={onRemoveWidget}
//           />
//         ))}
        
//         {/* Add Widget Placeholder */}
//         <div 
//           onClick={onAddWidget}
//           className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[120px] flex items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors group"
//         >
//           <div className="text-center">
//             <Plus className="mx-auto mb-2 text-gray-400 group-hover:text-blue-500" size={24} />
//             <p className="text-sm text-gray-500 group-hover:text-blue-600">
//               Add Widget
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// components/CategorySection.tsx - Fixed Implementation
import { Plus } from 'lucide-react';
import { Category } from '../types';
import { useDashboardStore } from '../store/dashboardStore';
import WidgetCard from './WidgetCard';

interface CategorySectionProps {
  category: Category;
  onRemoveWidget: (widgetId: string) => void;
  onAddWidget: () => void;
}

export default function CategorySection({ category, onRemoveWidget, onAddWidget }: CategorySectionProps) {
  const { getAllWidgets } = useDashboardStore();
  
  // Get all widgets and filter by category
  const allWidgets = getAllWidgets();
  const categoryWidgets = allWidgets.filter(widget => widget.categoryId === category.id);
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {category.name}
        </h2>
        <button
          onClick={onAddWidget}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Plus size={16} />
          Add Widget
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryWidgets.map((widget) => (
          <WidgetCard
            key={widget.id} 
            widget={widget}
            onRemove={onRemoveWidget}
          />
        ))}
        
        {/* Add Widget Placeholder */}
        <div 
          onClick={onAddWidget}
          className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[120px] flex items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors group"
        >
          <div className="text-center">
            <Plus className="mx-auto mb-2 text-gray-400 group-hover:text-blue-500" size={24} />
            <p className="text-sm text-gray-500 group-hover:text-blue-600">
              Add Widget
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}