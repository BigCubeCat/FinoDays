import {Box} from '@mui/material';

import Tabs from '@/components/Main/TabsComponent.tsx';
import {useIsSmall} from '@/utils/useWindowDimensions.ts';

export default function Main() {
  const isSmall = useIsSmall();
  return (
    <Box
      sx={{
        m: isSmall ? 0 : 5,
        marginBottom: 0,
      }}
    >
      <Tabs />
    </Box>
  );
}
