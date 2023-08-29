import {Box, Typography} from '@mui/material';
import {useState} from 'react';

import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import dayjs, {Dayjs} from 'dayjs';

export default function ContactTime() {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  return (
    <Box>
      <Typography variant={'h5'}>Время для связи</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 3,
        }}
      >
        <Box
          sx={{
            marginRight: 1,
          }}
        >
          <Typography variant={'body2'}>День</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </Box>
        <Box>
          <Typography variant={'body2'}>Время</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
}
