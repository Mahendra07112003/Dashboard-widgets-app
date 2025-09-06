// components/AllWidgetsPage.tsx (Client Component Wrapper)
'use client';

import { ToastProvider } from './ToastContext';
import AllWidgetsContent from './AllWidgetsContent';

export default function AllWidgetsPage() {
  return (
    <ToastProvider>
      <AllWidgetsContent />
    </ToastProvider>
  );
}