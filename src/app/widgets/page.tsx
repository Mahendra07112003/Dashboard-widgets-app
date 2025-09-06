
// // app/widgets/page.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { ArrowLeft } from 'lucide-react';
// import { useDashboardStore } from '../../store/dashboardStore';
// import SearchBar from '../../components/SearchBar';
// import WidgetCard from '../../components/WidgetCard';

// export default function AllWidgetsPage() {
//   const { categories, removeWidget } = useDashboardStore();
//   const [searchQuery, setSearchQuery] = useState('');

//   const allWidgets = categories.flatMap(category => 
//     category.widgets.map(widget => ({
//       ...widget,
//       categoryName: category.name
//     }))
//   );

//   const filteredWidgets = searchQuery
//     ? allWidgets.filter(widget =>
//         widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         widget.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         widget.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : allWidgets;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <Link 
//             href="/"
//             className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
//           >
//             <ArrowLeft size={20} />
//             Back to Dashboard
//           </Link>
          
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             All Widgets
//           </h1>
//           <p className="text-gray-600">
//             Browse and search through all available widgets ({allWidgets.length} total)
//           </p>
//         </div>

//         <SearchBar
//           value={searchQuery}
//           onChange={setSearchQuery}
//           placeholder="Search widgets by name, content, or category..."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredWidgets.map((widget) => (
//             <div key={widget.id} className="relative">
//               <WidgetCard
//                 widget={widget}
//                 onRemove={(widgetId) => removeWidget(widget.categoryId, widgetId)}
//               />
//               <div className="mt-2">
//                 <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                   {widget.categoryName}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredWidgets.length === 0 && searchQuery && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">
//               No widgets found matching "{searchQuery}"
//             </p>
//           </div>
//         )}

//         {filteredWidgets.length === 0 && !searchQuery && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">
//               No widgets available
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// app/widgets/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useDashboardStore } from '../../store/dashboardStore';
import SearchBar from '../../components/SearchBar';
import WidgetCard from '../../components/WidgetCard';

export default function AllWidgetsPage() {
  const { categories, removeWidget } = useDashboardStore();
  const [searchQuery, setSearchQuery] = useState('');

  const allWidgets = categories.flatMap(category => 
    category.widgets.map(widget => ({
      ...widget,
      categoryName: category.name
    }))
  );

  const filteredWidgets = searchQuery
    ? allWidgets.filter(widget =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        widget.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        widget.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allWidgets;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All Widgets
          </h1>
          <p className="text-gray-600">
            Browse and search through all available widgets ({allWidgets.length} total)
          </p>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search widgets by name, content, or category..."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWidgets.map((widget) => (
            <div key={widget.id} className="relative">
              <WidgetCard
                widget={widget}
                onRemove={(widgetId) => removeWidget(widget.categoryId, widgetId)}
              />
              <div className="mt-2">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {widget.categoryName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredWidgets.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No widgets found
              </h3>
              <p className="text-gray-500">
                No widgets match your search for "{searchQuery}". Try a different search term.
              </p>
            </div>
          </div>
        )}

        {filteredWidgets.length === 0 && !searchQuery && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No widgets yet
              </h3>
              <p className="text-gray-500 mb-6">
                Start by adding widgets to your dashboard categories.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft size={16} />
                Go to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}