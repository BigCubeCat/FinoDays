import {
  Box,
  Button,
  Card,
  Typography,
} from '@mui/material';
import {TResult} from '@/app/types.ts';
import ParamComponent from '@/components/Result/ParamComponent.tsx';
import {RU} from '@/components/forms/utils.ts';
import {getYearSuffix} from '@/utils/yearConv.ts';

export default function ResultCard({result}: {result: TResult}) {
  return (
    <Card sx={{width: 'min(700px, 100%)', m: 1}}>
      <Box>
        <Typography variant={'h5'} sx={{m: 1, marginBottom: 4}}>
          {result.title}
        </Typography>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between',
        }}>
          <ParamComponent to={result.rate + '%'} caption={'Ставка'} />
          <ParamComponent to={result.sum.to + RU} caption={'Сумма'} />
          <ParamComponent
            to={result.duration + ' ' + getYearSuffix(result.duration)}
            caption={'Срок'}
          />
        </Box>
        <Box sx={{
          display: 'flex',
        }}></Box>
      </Box>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Button
          variant={'contained'}
          color={'secondary'}
          sx={{m: 1, p: 2}}
        >
          Оформить
        </Button>
      </Box>
    </Card>
  );
}