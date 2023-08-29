import React, {useState} from 'react';
import {Box, Paper, Tab, Tabs} from '@mui/material';

import ProductForm from '@/components/forms/ProductForm/ProductForm.tsx';
import UserForm from '@/components/forms/UserForm/UserForm.tsx';
import HistoryForm from '@/components/forms/HistoryForm/HistoryForm.tsx';
import ResultDialog from '../Result/ResultDialog';

export default function MyTabs() {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    {
      id: 0,
      label: 'Условия',
      content: <ProductForm next={() => setValue(1)} />,
    },
    {
      id: 1,
      label: 'Персональные данные',
      content: <UserForm next={() => setValue(2)} />,
    },
    {
      id: 2,
      label: 'Кредитная история',
      content: <HistoryForm next={() => setIsOpen(true)} />,
    },
  ];

  const CurrentTab = tabs.filter((tab) => tab.id === value)[0].content;

  return (
    <Box
      component={Paper}
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {isOpen && <ResultDialog open={isOpen} close={() => setIsOpen(false)} />}
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} variant={'fullWidth'}>
          {tabs.map((tab) => (
            <Tab sx={{maxWidth: 300}} label={tab.label} id={`tab-${tab.id}`} />
          ))}
        </Tabs>
        {CurrentTab}
      </Box>
    </Box>
  );
}
