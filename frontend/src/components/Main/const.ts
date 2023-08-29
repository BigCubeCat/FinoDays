import React from 'react';

import UserForm from '@/components/forms/UserForm/UserForm.tsx';
import ProductForm from '@/components/forms/ProductForm/ProductForm.tsx';
import HistoryForm from '@/components/forms/HistoryForm/HistoryForm.tsx';

export const tabs = [
  {
    id: 0,
    label: 'Условия',
    content: React.memo(ProductForm),
  },
  {
    id: 1,
    label: 'Персональные данные',
    content: React.memo(UserForm),
  },
  {
    id: 2,
    label: 'Кредитная история',
    content: React.memo(HistoryForm)
  }
];
