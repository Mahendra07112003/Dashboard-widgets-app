# Dashboard Application

A dynamic dashboard application built with Next.js, React, TypeScript, Zustand, and Tailwind CSS. This application allows users to dynamically add and remove widgets from different categories with a polished, professional UI and enhanced user experience.

## ✨ Features

### Core Features
- **Dynamic Widget Management**: Add and remove widgets from categories with real-time updates
- **Search Functionality**: Search through all widgets by name or content
- **Persistent State**: Widget data persists using Zustand with localStorage
- **Category Organization**: Widgets are organized into logical categories
- **Responsive Design**: Clean, modern UI that works on all screen sizes

### Enhanced Features ✨
- **🎉 Toast Notifications**: Success/error notifications for all actions
  - Success messages when adding widgets: *"Widget 'Name' added successfully!"*
  - Success messages when removing widgets: *"Widget 'Name' removed!"*
  - Error handling for export/import operations
- **📱 All Widgets Page**: Dedicated page to browse and search all widgets
- **💾 Export/Import**: Download and upload dashboard data as JSON
- **🎨 Hover Effects**: Smooth animations and hover states on widget cards
- **📋 Empty States**: Informative messages when no data is available
- **🔍 Professional UI**: Polished design with consistent styling and smooth transitions

### UI/UX Improvements
- **Widget Cards**: Smooth lift and shadow effects on hover
- **Delete Button**: Always visible cross (X) button with red hover effect
- **Loading States**: Professional loading animations
- **Visual Feedback**: Immediate visual responses to user actions
- **Typography**: Clean, readable font hierarchy with Inter font

## Project Structure

```
/src
  /app
    /page.tsx                 // Main dashboard page (Server Component)
    /widgets/page.tsx         // All widgets searchable list
    /layout.tsx              // Root layout
    /globals.css             // Global styles with Inter font
  /components
    ClientDashboard.tsx      // Main dashboard client component
    DashboardContent.tsx     // Dashboard content with toast context
    AllWidgetsPage.tsx       // All widgets page wrapper
    AllWidgetsContent.tsx    // All widgets content with toast context
    AddWidgetDialog.tsx      // Modal for adding new widgets
    CategorySection.tsx      // Category container component  
    SearchBar.tsx           // Search input component
    WidgetCard.tsx          // Individual widget component (with hover effects)
    ToastContext.tsx        // Toast notification system
    ExportImportButtons.tsx // Export/Import functionality
  /data
    seed.ts                 // Initial JSON data (categories/widgets)
  /store
    dashboardStore.ts       // Zustand store with persist + import
  /types
    index.ts               // TypeScript type definitions
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better development experience
- **Zustand** - Lightweight state management with persistence
- **Tailwind CSS** - Utility-first styling with custom hover effects
- **Lucide React** - Beautiful, customizable icons

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs the linter

## How to Use

### Main Dashboard (`/`)

1. **View Widgets**: All widgets are organized by categories with smooth card animations
2. **Add Widget**: 
   - Click the "Add Widget" button in any category header
   - Or click the dashed placeholder card
   - Fill out the modal form and see success toast notification
3. **Remove Widget**: Click the visible 'X' button in the top-right corner of any widget (turns red on hover)
4. **Search**: Use the search bar at the top to find specific widgets across all categories
5. **Export/Import**: Use buttons in the top-right to backup/restore your dashboard data

### All Widgets Page (`/widgets`)

1. **Browse All**: View all widgets across all categories in one place
2. **Search**: Search through all widgets by name, content, or category
3. **Remove**: Remove widgets directly from this view with toast notifications
4. **Navigate Back**: Use the back button to return to the main dashboard

### Adding a New Widget

1. Click "Add Widget" in any category or click a dashed placeholder
2. Fill out the modal form:
   - **Widget Name**: Enter a descriptive name (required)
   - **Widget Content**: Enter the content (supports line breaks)
3. Click "Add Widget" to save
4. See success toast notification: *"Widget 'Your Widget Name' added successfully!"*

### Removing Widgets

1. Hover over any widget card to see enhanced hover effects
2. Click the 'X' button in the top-right corner (always visible)
3. Widget is instantly removed with smooth animation
4. See success toast notification: *"Widget 'Widget Name' removed!"*

### Data Management

- **Auto-Save**: All changes are automatically saved to localStorage
- **Persistence**: Data persists between browser sessions
- **Export**: Download your dashboard configuration as JSON
- **Import**: Upload a previously exported JSON file to restore data
- **Reset**: Clear browser storage to reset to default data

## Technical Features

### State Management
- **Zustand Store**: Lightweight, efficient state management
- **Persistence**: Automatic localStorage integration
- **Real-time Updates**: Instant UI updates across components
- **Type Safety**: Full TypeScript integration

### UI/UX Enhancements
- **Toast System**: Context-based notification system
- **Hover Effects**: 
  - Widget cards lift with shadow on hover
  - Delete button turns red on hover
  - Smooth transitions for all interactions
- **Empty States**: Friendly messages with emoji icons
- **Responsive Design**: Mobile-first approach

### Performance
- **Next.js Optimization**: Server-side rendering and optimization
- **Component Splitting**: Efficient client/server component separation
- **Lazy Loading**: Optimal loading strategies

## Customization

### Adding New Categories

Edit `src/data/seed.ts` and add new categories to the `initialCategories` array:

```typescript
{
  id: 'new-category',
  name: 'New Category Name',
  widgets: []
}
```

### Styling Customization

The app uses Tailwind CSS for styling:
- **Component Styles**: Modify individual component classes
- **Global Styles**: Update `app/globals.css` for global changes
- **Theme**: Customize `tailwind.config.js` for theme modifications
- **Animations**: Hover effects and transitions are built with Tailwind

### Toast Notifications

Customize toast messages in component files:
- Success messages for widget operations
- Error handling for data operations
- Styling can be modified in `ToastContext.tsx`

## Architecture Highlights

- **Clean Architecture**: Separation of concerns with modular components
- **Type Safety**: Comprehensive TypeScript implementation
- **State Persistence**: Reliable data persistence with Zustand
- **Component Composition**: Reusable, maintainable component structure
- **Context Management**: Proper React context usage for global state
- **Error Handling**: Graceful error handling with user feedback

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest) 
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Recent Improvements

### ✅ Fixed Issues:
1. **Toast Provider Context**: Properly implemented context wrapping for toast notifications
2. **Component Structure**: Clean separation of server and client components
3. **Widget Delete Button**: Always visible cross button for easy widget removal

### ✨ Enhanced Features:
1. **Professional UI**: Polished design with smooth animations
2. **Better UX**: Hover effects, loading states, and visual feedback
3. **Data Management**: Export/import functionality with error handling
4. **Notifications**: Toast system for all user actions
5. **Search Experience**: Enhanced search across all widgets

## License

This project is for educational/demonstration purposes.

## Support

For questions or issues, please refer to the component documentation in the codebase or check the console for any error messages during development.