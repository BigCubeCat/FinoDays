import {useState} from 'react';

import {Box, Button, Typography} from '@mui/material';

export default function Family() {
  const [result, setResult] = useState(false);
  return (
    <Box sx={{marginRight: 4}}>
      <Typography variant="h5">Семейное положение</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          sx={{m: 2}}
          variant={!result ? 'text' : 'contained'}
          onClick={() => setResult(true)}
        >
          В браке
        </Button>
        <Button
          sx={{m: 2}}
          variant={result ? 'text' : 'contained'}
          onClick={() => setResult(false)}
        >
          Не в браке
        </Button>
      </Box>
    </Box>
  );
}
