import {Box, Dialog, DialogTitle, Typography} from '@mui/material';
import Header from '../AppBar/Header';
import {useAppSelector} from '@/app/hooks.ts';
import {selectResults} from '@/app/response/responseSlice.ts';

export default function ResultDialog(props: {open: boolean, close: () => void}) {
  const results = useAppSelector(selectResults);

  return (
    <Dialog onClose={() => props.close()} open={props.open} fullScreen>
      <Header />
      <DialogTitle>
        <Typography variant={'h5'} textAlign={'center'}>
          На основании ваших ответов мы модобрали для вас лучшие предложения
        </Typography>
      </DialogTitle>
      <Box sx={{}}>
        {results.map(result => <Box>{result.title}</Box>)}
      </Box>
    </Dialog>
  );
}