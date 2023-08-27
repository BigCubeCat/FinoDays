import {Box, Card, InputAdornment, TextField, Typography} from '@mui/material';
import {useState} from 'react';
export default function Gos() {
  const [value, setValue] = useState('');
  return (
    <Card elevation={0}>
      <Typography
        variant={'h5'}
        sx={{width: '100%', marginBottom: 2}}
        textAlign={'center'}
      >
        Авторизуйтесь через ГосУслуги
      </Typography>
      <Box sx={{display: 'flex'}}>
        <TextField
          sx={{width: '100%'}}
          variant={'outlined'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={'ГосУслуги ID'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  width={48}
                  height={48}
                  src={'/ui/gos.png'}
                  alt={'ГосУслуги id'}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Typography variant={'caption'}>
        Тут должна быть авторизация через ГосУслуги или другой сервис для того,
        чтобы пользователь не вводил данне ниже
      </Typography>
    </Card>
  );
}
