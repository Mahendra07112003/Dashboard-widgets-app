// "use client";

// import CategorySection from "./CategorySection";
// import { useDashboardStore } from "@/store/dashboardStore";

// export default function CategoryClientList() {
//   const categories = Object.keys(useDashboardStore((s) => s.data.categories));
//   return (
//     <div className="space-y-8">
//       {categories.map((cid) => (
//         <CategorySection key={cid} categoryId={cid} />
//       ))}
//     </div>
//   );
// }


// components/CategoryClientList.tsx - Fixed Implementation
"use client";

import CategorySection from "./CategorySection";
import { useDashboardStore } from "@/store/dashboardStore";

export default function CategoryClientList() {
  // Fix: Access categories directly, not through s.data.categories
  const categories = useDashboardStore((s) => s.categories);
  
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} onRemoveWidget={() => {}} onAddWidget={() => {}} />
      ))}
    </div>
  );
}