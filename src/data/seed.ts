

// data/seed.ts
import { Category } from '../types';

export const initialCategories: Category[] = [
  {
    id: 'cspm-executive',
    name: 'CSPM Executive Dashboard',
    widgets: [
      {
        id: 'widget-1',
        name: 'Cloud Accounts',
        text: 'Connected (2)\nTotal (2)',
        categoryId: 'cspm-executive'
      },
      {
        id: 'widget-2',
        name: 'Cloud Account Risk Assessment',
        text: 'Failed (1689)\nWarning (681)\nNot available (36)\nPassed (7253)',
        categoryId: 'cspm-executive'
      }
    ]
  },
  {
    id: 'cwpp-dashboard',
    name: 'CWPP Dashboard',
    widgets: [
      {
        id: 'widget-3',
        name: 'Top 5 Namespace Specific Alerts',
        text: 'No Graph data available!',
        categoryId: 'cwpp-dashboard'
      },
      {
        id: 'widget-4',
        name: 'Workload Alerts',
        text: 'No Graph data available!',
        categoryId: 'cwpp-dashboard'
      }
    ]
  },
  {
    id: 'registry-scan',
    name: 'Registry Scan',
    widgets: [
      {
        id: 'widget-5',
        name: 'Image Risk Assessment',
        text: 'Total Vulnerabilities (1470)\nCritical (9)\nHigh (150)',
        categoryId: 'registry-scan'
      },
      {
        id: 'widget-6',
        name: 'Image Security Issues',
        text: 'Total Images (2)\nCritical (2)\nHigh (2)',
        categoryId: 'registry-scan'
      }
    ]
  }
];