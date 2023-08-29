import { Card, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';

import Gos from '@/components/forms/UserForm/Gos.tsx';
import useUserForm from '@/components/forms/UserForm/useUserForm.ts';
import Family from './Family';
import Region from './Region';
import ContactTime from './ContactTime';

export default function UserForm() {
  const formData = useUserForm();
  const GosComponent = React.memo(Gos);

  return (
    <Card
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        p: 2,
        maxWidth: 500,
      }}
      elevation={0}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <GosComponent />
      </Box>
      <Typography variant={'h5'} textAlign={'center'} sx={{ m: 1 }}>
        или
      </Typography>
      <Box sx={{ marginTop: 1 }}>
        <Typography variant={'h6'} textAlign={'center'}>
          Заполните данные о себе
        </Typography>
        <Box>
          <TextField
            fullWidth
            margin={'normal'}
            label={'ФИО'}
            placeholder={'ФИО'}
            onChange={(e) => formData.setName(e.target.value)}
            value={formData.name}
          />
          <TextField
            fullWidth
            margin={'normal'}
            label={'Стаж, лет'}
            type={'number'}
            placeholder={'Трудовой стаж'}
            onChange={(e) => formData.setExperience(Number(e.target.value))}
            value={formData.experience}
            InputProps={{ inputProps: { min: 0, max: 1000 } }}
          />
          <MuiTelInput
            fullWidth
            value={formData.phone}
            onChange={formData.setPhone}
            defaultCountry={'RU'}
          />
        </Box>
      </Box>
      <Box sx={{
        display: 'flex', justifyContent: 'center', flexWrap: "wrap",
        marginTop: 3
      }}>
        <Family />
        <Region />
      </Box>
      <ContactTime />
    </Card>
  );
}
