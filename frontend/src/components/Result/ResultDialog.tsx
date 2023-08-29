import {Box, Button, Dialog, DialogTitle, Typography} from '@mui/material';
import Header from '../AppBar/Header';
import {useAppSelector} from '@/app/hooks.ts';
import {useEffect, useState} from 'react';
import {selectUser} from '@/app/user/userSlice.ts';
import {loadResult} from '@/app/response/responseAPI.ts';
import {TResult} from '@/app/types.ts';
import ResultCard from './ResultCard';

export default function ResultDialog(props: {open: boolean, close: () => void}) {
  const user = useAppSelector(selectUser).user;
  const [results, setResults] = useState<TResult[]>([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await loadResult(user);
      console.log(data);
      setResults(data.plans);
    };
    fetchAPI().catch(console.warn);
  }, []);

  return (
    <Dialog onClose={() => props.close()} open={props.open} fullScreen>
      <Header />
      <DialogTitle>
        <Button variant={"text"} onClick={() => props.close()}>
          Назад
        </Button>
        <Typography variant={'h5'} textAlign={'center'}>
          На основании ваших ответов мы модобрали для вас лучшие предложения
        </Typography>

      </DialogTitle>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {results.map(result => <ResultCard result={result} />)}
      </Box>
    </Dialog>
  );
}