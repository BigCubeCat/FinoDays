import {Box, Typography} from '@mui/material';

export default function ParamComponent(props: {to: string; caption: string}) {
  return (
    <Box sx={{m: 2}}>
      <Typography variant={'h6'}>До {props.to}</Typography>
      <Typography variant={'caption'}>{props.caption}</Typography>
    </Box>
  );
}
