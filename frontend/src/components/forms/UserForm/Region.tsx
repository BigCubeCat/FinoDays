import {
  Box,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import {useState} from 'react';

export default function Region() {
  const [reg, setReg] = useState('05');

  const handleChange = (event: SelectChangeEvent) => {
    setReg(event.target.value as string);
  };

  return (
    <Box>
      <Typography variant="h5">Регион</Typography>
      <Select value={reg} onChange={handleChange}>
        <MenuItem value={'54'}>Новосибирская область</MenuItem>
        <MenuItem value={'22'}>Алтайский край</MenuItem>
        <MenuItem value={'05'}>Московская область</MenuItem>
      </Select>
    </Box>
  );
}
