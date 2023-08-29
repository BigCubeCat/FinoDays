import {
  Box,
  Button,
  Card,
  Typography,
} from '@mui/material';
import {TResult} from '@/app/types.ts';
import ParamComponent from '@/components/Result/ParamComponent.tsx';
import {RU} from '@/components/forms/utils.ts';

export default function ResultCard({result}: {result: TResult}) {
  return (
    <Card sx={{maxWidth: 700, m: 1}}>
      <Box sx={{p: 2}}>
        <Typography variant={'h5'} sx={{marginBottom: 4}}>
          {result.title}
        </Typography>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between',
        }}>
          <ParamComponent to={result.rate + '%'} caption={'Ставка'} />
          <ParamComponent to={result.sum.to + RU} caption={'Сумма'} />
          <ParamComponent to={result.duration + ' годиков'} caption={'Срок'} />
        </Box>
        <Box sx={{
          display: 'flex',
        }}></Box>
      </Box>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant={'contained'} color={"secondary"}>
          Оформить
        </Button>
      </Box>
    </Card>
  );
}