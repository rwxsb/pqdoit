import Grid2 from '@mui/material/Grid';
import { QueueWrapper } from '../QueueWrapper/QueueWrapper';
import { Button, Divider } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/Add';

export const QueueList: React.FC = () => {
  const [queues, setQueues] = useState<{ id: number }[]>([]);

  const addQueue = () => {
    setQueues([...queues, { id: 1 }]);
  };

  return (
    <div>
      <Grid2 container direction={'column'} gap={5}>
        {queues.map((i) => (
          <>
            <QueueWrapper num={i.id} />
            <Divider />
          </>
        ))}
        <Button onClick={addQueue} fullWidth>
          <AddCircleIcon />
        </Button>
      </Grid2>
    </div>
  );
};
