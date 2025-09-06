export type Widget = {
    id: string;
    name: string;
    text: string;
    categoryId: string;
  };
  
  export type Category = {
    id: string;
    name: string;
    widgetIds: string[];
  };
  
  export type DashboardData = {
    categories: Record<string, Category>;
    widgets: Record<string, Widget>;
  };
  