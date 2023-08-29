import {
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';

import MoneyInput from '@/components/forms/MoneyInput.tsx';
import useProductForm from '@/components/forms/ProductForm/useProductForm.ts';
import {purposeVariants} from '@/components/forms/ProductForm/const.ts';

export default function ProductForm(props: {next: () => void}) {
  const formData = useProductForm();

  const handleSelectChange = (event: SelectChangeEvent) => {
    formData.setPurpose(event.target.value as string);
  };

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
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          <Box>
            <Typography variant={'h6'}>Укажите цель кредита</Typography>
            <Select
              fullWidth
              value={formData.purpose}
              onChange={handleSelectChange}
            >
              {purposeVariants.map((purposeVariant) => {
                return (
                  <MenuItem value={purposeVariant.id}>
                    {purposeVariant.label}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box>
            <Typography variant={'h6'}>Срок займа в годах</Typography>
            <TextField
              type="number"
              value={formData.time}
              onChange={(e) => formData.setTime(Number(e.target.value))}
              InputProps={{inputProps: {min: 1, max: 100}}}
            />
          </Box>
        </Box>
        <MoneyInput
          value={formData.sum}
          setValue={formData.setSum}
          minimum={1000}
          maximum={10000000}
          step={1000}
          label="Сумма кредита"
          enableButtons
        />
        <MoneyInput
          value={formData.payment}
          setValue={formData.setPayment}
          minimum={1000}
          maximum={formData.sum}
          step={1000}
          label="Ежемесячный платеж"
          enableButtons
        />
      </Box>
      <Button
        onClick={() => props.next()}
        variant={'contained'}
        sx={{marginTop: 5}}
      >
        Далее
      </Button>
    </Card>
  );
}
