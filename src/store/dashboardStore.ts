


// // store/dashboardStore.ts
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { DashboardState, Category, Widget } from '../types';
// import { initialCategories } from '../data/seed';

// export const useDashboardStore = create<DashboardState>()(
//   persist(
//     (set, get) => ({
//       categories: initialCategories,
      
//       addWidget: (categoryId: string, widget: Omit<Widget, 'id' | 'categoryId'>) => {
//         const newWidget: Widget = {
//           ...widget,
//           id: `widget-${Date.now()}`,
//           categoryId,
//         };
        
//         set((state) => ({
//           categories: state.categories.map((category) =>
//             category.id === categoryId
//               ? { ...category, widgets: [...category.widgets, newWidget] }
//               : category
//           ),
//         }));
//       },
      
//       removeWidget: (categoryId: string, widgetId: string) => {
//         set((state) => ({
//           categories: state.categories.map((category) =>
//             category.id === categoryId
//               ? {
//                   ...category,
//                   widgets: category.widgets.filter((widget) => widget.id !== widgetId),
//                 }
//               : category
//           ),
//         }));
//       },
      
//       searchWidgets: (query: string) => {
//         const { categories } = get();
//         const allWidgets = categories.flatMap((category) => category.widgets);
//         return allWidgets.filter(
//           (widget) =>
//             widget.name.toLowerCase().includes(query.toLowerCase()) ||
//             widget.text.toLowerCase().includes(query.toLowerCase())
//         );
//       },
      
//       getAllWidgets: () => {
//         const { categories } = get();
//         return categories.flatMap((category) => category.widgets);
//       },
//     }),
//     {
//       name: 'dashboard-storage',
//     }
//   )
// );


// store/dashboardStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DashboardState, Category, Widget } from '../types';
import { initialCategories } from '../data/seed';

interface DashboardStore extends DashboardState {
  importData: (categories: Category[]) => void;
}

export const useDashboardStore = create<DashboardStore>()(
  persist(
    (set, get) => ({
      categories: initialCategories,
      
      addWidget: (categoryId: string, widget: Omit<Widget, 'id' | 'categoryId'>) => {
        const newWidget: Widget = {
          ...widget,
          id: `widget-${Date.now()}`,
          categoryId,
        };
        
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === categoryId
              ? { ...category, widgets: [...category.widgets, newWidget] }
              : category
          ),
        }));
      },
      
      removeWidget: (categoryId: string, widgetId: string) => {
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === categoryId
              ? {
                  ...category,
                  widgets: category.widgets.filter((widget) => widget.id !== widgetId),
                }
              : category
          ),
        }));
      },
      
      searchWidgets: (query: string) => {
        const { categories } = get();
        const allWidgets = categories.flatMap((category) => category.widgets);
        return allWidgets.filter(
          (widget) =>
            widget.name.toLowerCase().includes(query.toLowerCase()) ||
            widget.text.toLowerCase().includes(query.toLowerCase())
        );
      },
      
      getAllWidgets: () => {
        const { categories } = get();
        return categories.flatMap((category) => category.widgets);
      },

      importData: (categories: Category[]) => {
        set({ categories });
      },
    }),
    {
      name: 'dashboard-storage',
    }
  )
);