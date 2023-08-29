import React from 'react';
import {
  Box,
  Slider,
  Typography,
  FormControl,
  FilledInput,
  IconButton,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {customValue, RU} from '@/components/forms/utils.ts';

interface MoneyProps {
  value: number;
  setValue: (value: number) => void;
  minimum: number;
  maximum: number;
  step: number;
  label: string;
  enableButtons: boolean;
}

export default function MoneyInput({
  value,
  setValue,
  minimum,
  maximum,
  label,
  step,
  enableButtons,
}: MoneyProps) {
  const [preview, setPreview] = React.useState('0');
  const updateValue = (newValue: number) => {
    setValue(newValue);
    setPreview(customValue(newValue));
  };
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    updateValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value.replace(RU, '').replace('.', '');
    const newValue = eventValue === '' ? 0 : Math.round(Number(eventValue));
    updateValue(newValue);
  };

  const handleMinus = () => {
    updateValue(value - step);
  };
  const handlePlus = () => {
    updateValue(value + step);
  };

  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 1,
      }}
    >
      <Typography variant={'body2'} sx={{fontWeight: 500}}>
        {label}
      </Typography>

      <FormControl margin={'none'}>
        <FilledInput
          startAdornment={
            enableButtons && (
              <IconButton onClick={handleMinus}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            )
          }
          endAdornment={
            enableButtons && (
              <IconButton onClick={handlePlus}>
                <AddCircleOutlineIcon />
              </IconButton>
            )
          }
          onChange={handleInputChange}
          value={preview}
          inputProps={{
            style: {fontSize: 20, textAlign: 'center'},
            step: 1,
            min: minimum,
            max: maximum,
            'aria-labelledby': 'input-slider',
          }}
        />
      </FormControl>
      <Slider
        value={value}
        min={minimum}
        max={maximum}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
    </Box>
  );
}
