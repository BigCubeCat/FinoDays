import {
  Box,
  Card,
  Typography,
} from '@mui/material';
import {TResult} from '@/app/types.ts';
import ParamComponent from '@/components/Result/ParamComponent.tsx';

export default function ResultCard({result}: {result: TResult}) {
  return (
    <Card>
      <Box>
        <Typography variant={'h5'}>
          {result.title}
        </Typography>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between',
        }}>
          <ParamComponent to={result.rate} caption={'Ставка'} />
          <ParamComponent to={result.sum.to} caption={'Сумма'} />
          <ParamComponent to={result.duration} caption={'Срок'} />
        </Box>
        <Box sx={{
          display: 'flex',
        }}></Box>
      </Box>
    </Card>
  );
}