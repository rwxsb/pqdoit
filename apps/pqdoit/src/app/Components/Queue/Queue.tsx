import { Card, Stack } from '@mui/material';

export const Queue: React.FC = () => {
  return (
    <Stack direction={'row'} spacing={1}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Card>
          <div style={{ height: '10em', width: '10em' }}></div>
        </Card>
      ))}
    </Stack>
  );
};
