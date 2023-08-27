import {Box, Button, Card, TextField, Typography} from '@mui/material';
import {MuiTelInput} from 'mui-tel-input';
import React from 'react';

import Gos from '@/components/UserForm/Gos.tsx';
import useUserForm from '@/components/UserForm/useUserForm.ts';

export default function UserForm() {
  const formData = useUserForm();
  const GosComponent = React.memo(Gos);

  const handleClick = () => {
    formData.saveData();
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        p: 1,
        maxWidth: 500,
      }}
    >
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <GosComponent />
      </Box>
      <Typography variant={'h4'} textAlign={'center'} sx={{m: 1}}>
        или
      </Typography>
      <Box sx={{marginTop: 1}}>
        <Typography variant={'h5'} textAlign={'center'}>
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            <TextField
              margin={'normal'}
              label={'Стаж, лет'}
              type={'number'}
              placeholder={'Трудовой стаж'}
              onChange={(e) => formData.setExperience(Number(e.target.value))}
              value={formData.experience}
            />
            <TextField
              margin={'normal'}
              type={'number'}
              label={'Количество кредитов'}
              onChange={(e) => formData.setCount(Number(e.target.value))}
              value={formData.count}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            <TextField
              margin={'normal'}
              label={'Ежемесячный доход'}
              type={'number'}
              onChange={(e) => formData.setIncome(Number(e.target.value))}
              value={formData.income}
            />
            <TextField
              margin={'normal'}
              label={'Кредитная нагрузка'}
              type={'number'}
              onChange={(e) => formData.setConsumption(Number(e.target.value))}
              value={formData.consumption}
            />
          </Box>
          <MuiTelInput
            fullWidth
            value={formData.phone}
            onChange={formData.setPhone}
            defaultCountry={'RU'}
          />
        </Box>
      </Box>
      <Button
        fullWidth
        variant={'contained'}
        sx={{marginTop: 1}}
        onClick={handleClick}
      >
        ok
      </Button>
    </Card>
  );
}
