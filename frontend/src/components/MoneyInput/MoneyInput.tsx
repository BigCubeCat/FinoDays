import {useState} from 'react';
import {Box, Slider, Typography, IconButton, Paper} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {customValue, RU} from '@/components/forms/utils.ts';
import AccurateInput from './AccurateInput';

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
  const [mode, setMode] = useState(0);
  const [preview, setPreview] = useState('0');
  const updateValue = (newValue: number) => {
    setValue(newValue);
    setPreview(customValue(newValue));
  };
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    updateValue(newValue as number);
  };

  const handleMinus = () => {
    updateValue(value - step);
  };
  const handlePlus = () => {
    updateValue(value + step);
  };

  if (!mode) {
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
        <Box
          sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}
        >
          {enableButtons && (
            <IconButton onClick={handleMinus}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          )}
          <Box
            component={Paper}
            elevation={0}
            onClick={() => setMode(1)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant={'body1'}>{preview}</Typography>
          </Box>
          {enableButtons && (
            <IconButton onClick={handlePlus}>
              <AddCircleOutlineIcon />
            </IconButton>
          )}
        </Box>
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
  return (
    <Box sx={{marginTop: 2, marginBottom: 2}}>
      <AccurateInput
        label={label}
        value={value}
        setValue={updateValue}
        modeChange={() => setMode(0)}
      />
    </Box>
  );
}
