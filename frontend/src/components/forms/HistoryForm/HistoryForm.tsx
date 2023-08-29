import {Button, Card, Checkbox, FormControlLabel, TextField, Typography} from '@mui/material';
import Box from '@mui/material/Box';

import useHistoryForm from '@/components/forms/HistoryForm/useHistoryForm.ts';
import {variants} from '@/components/forms/HistoryForm/const.ts';

export default function HistoryForm(props: {next: () => void}) {
  const formData = useHistoryForm();

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
          label={'Текущий расход по кредитам'}
          onChange={(e) => formData.setConsumption(Number(e.target.value))}
          value={formData.consumption}
          InputProps={{inputProps: {min: 0, max: 100000000}}}
        />
        <TextField
          fullWidth
          sx={{m: 1}}
          margin={'normal'}
          label={'Стаж, лет'}
          type={'number'}
          placeholder={'Трудовой стаж'}
          onChange={(e) => formData.setExperience(Number(e.target.value))}
          value={formData.experience}
          InputProps={{inputProps: {min: 0, max: 1000}}}
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
          {variants.map((variant) => (
            <Button
              sx={{broderRadius: 50, m: 2, p: 2}}
              variant={
                formData.otherProducts[variant.id] ? 'contained' : 'text'
              }
              color={'primary'}
              onClick={() => {
                formData.setOtherProducts(
                  formData.otherProducts.map((v, i) =>
                    i === variant.id ? !v : v,
                  ),
                );
              }}
            >
              {variant.label}
            </Button>
          ))}
        </Box>
      </Box>
      <FormControlLabel required control={<Checkbox />} label="я принимаю условия передачи личной информации" />
      <Button
        onClick={() => props.next()}
        variant={'contained'}
        sx={{marginTop: 5}}
      >
        Отправить
      </Button>
    </Card>
  );
}
