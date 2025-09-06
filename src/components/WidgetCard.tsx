

// // components/WidgetCard.tsx
// import { X } from 'lucide-react';
// import { Widget } from '../types';

// interface WidgetCardProps {
//   widget: Widget;
//   onRemove: (widgetId: string) => void;
// }

// export default function WidgetCard({ widget, onRemove }: WidgetCardProps) {
//   return (
//     <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative min-h-[120px] hover:shadow-md transition-shadow">
//       <button
//         onClick={() => onRemove(widget.id)}
//         className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
//         title="Remove widget"
//       >
//         <X size={16} />
//       </button>
      
//       <h3 className="font-medium text-gray-900 mb-3 pr-6 text-sm">
//         {widget.name}
//       </h3>
      
//       <div className="text-gray-600 text-xs leading-relaxed">
//         {widget.text.split('\n').map((line, index) => (
//           <div key={index} className="mb-1">
//             {line}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// components/WidgetCard.tsx
import { X } from 'lucide-react';
import { Widget } from '../types';

interface WidgetCardProps {
  widget: Widget;
  onRemove: (widgetId: string) => void;
}

export default function WidgetCard({ widget, onRemove }: WidgetCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative min-h-[120px] hover:shadow-md transition-shadow">
      <button
        onClick={() => onRemove(widget.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-all duration-200 hover:bg-red-50 rounded-full p-1"
        title="Remove widget"
      >
        <X size={16} />
      </button>
      
      <h3 className="font-medium text-gray-900 mb-3 pr-6 text-sm">
        {widget.name}
      </h3>
      
      <div className="text-gray-600 text-xs leading-relaxed">
        {widget.text.split('\n').map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}