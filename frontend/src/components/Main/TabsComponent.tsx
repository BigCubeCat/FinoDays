import React, {useState} from 'react';
import {Box, Paper, Tab, Tabs} from '@mui/material';

import {tabs} from '@/components/Main/const.ts';

export default function MyTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const CurrentTab = tabs.filter(tab => tab.id === value)[0].content;

  return (
    <Box
      component={Paper}
      sx={{
        display: 'flex', justifyContent: 'center',
      }}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant={'fullWidth'}
        >
          {tabs.map(tab => <Tab
            sx={{maxWidth: 300}}
            label={tab.label}
            id={`tab-${tab.id}`}
          />)}
        </Tabs>
        <CurrentTab />
      </Box>
    </Box>
  );
}