"use client";

import CategorySection from "./CategorySection";
import { useDashboardStore } from "@/store/dashboardStore";

export default function CategoryClientList() {
  const categories = Object.keys(useDashboardStore((s) => s.data.categories));
  return (
    <div className="space-y-8">
      {categories.map((cid) => (
        <CategorySection key={cid} categoryId={cid} />
      ))}
    </div>
  );
}
