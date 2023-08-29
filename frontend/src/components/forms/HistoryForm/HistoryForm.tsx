import {Button, Card, TextField, Typography} from '@mui/material';
import Box from '@mui/material/Box';

import useHistoryForm from '@/components/forms/HistoryForm/useHistoryForm.ts';
import {variants} from '@/components/forms/HistoryForm/const.ts';

export default function HistoryForm() {
  const formData = useHistoryForm();
  console.log(formData.otherProducts);

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
      <Box sx={{marginTop: 1}}>
        <TextField
          fullWidth
          sx={{m: 1}}
          type={'number'}
          label={'Доход в Рублях'}
          onChange={(e) => formData.setIncome(Number(e.target.value))}
          value={formData.income}
          InputProps={{inputProps: {min: 0, max: 100000000}}}
        />
        <TextField
          fullWidth
          sx={{m: 1}}
          type={'number'}
          label={'текущий расход по кредитам'}
          onChange={(e) => formData.setConsumption(Number(e.target.value))}
          value={formData.consumption}
          InputProps={{inputProps: {min: 0, max: 100000000}}}
        />
        <TextField
          fullWidth
          sx={{m: 1}}
          type={'number'}
          label={'Количество кредитов'}
          onChange={(e) => formData.setCount(Number(e.target.value))}
          value={formData.count}
          InputProps={{inputProps: {min: 0, max: 1000}}}
        />
        <TextField
          fullWidth
          sx={{m: 1}}
          label={'ИНН работодателя'}
          onChange={(e) => formData.setEmployer(e.target.value)}
          value={formData.employer}
        />
      </Box>
      <Box>
        <Typography variant={'h6'} textAlign={'center'}>
          Использование продуктов ПСБ
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          {variants.map(variant => <Button
            sx={{broderRadius: 50, m: 2, p: 2}}
            variant={formData.otherProducts[variant.id] ? 'contained' : 'text'}
            color={'primary'}
            onClick={() => {
              formData.setOtherProducts(formData.otherProducts.map((v, i) => (i === variant.id) ? !v : v));
            }}
          >{variant.label}</Button>)}
        </Box>
      </Box>
    </Card>
  );
}
