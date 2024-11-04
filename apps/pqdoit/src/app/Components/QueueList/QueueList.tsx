import Grid2 from '@mui/material/Grid';
import { QueueWrapper } from '../QueueWrapper/QueueWrapper';
import { Button, Divider } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import { UniqueIdentifier } from '@dnd-kit/core';

export const QueueList: React.FC = () => {
  const [queues, setQueues] = useState<{ id: UniqueIdentifier }[]>([]);

  const addQueue = () => {
    setQueues([...queues, { id: uuidv4() }]);
  };

  return (
    <div>
      <Grid2 container direction={'column'} gap={5}>
        {queues.map((i, index) => (
          <>
            <QueueWrapper key={`queue-${index}`} id={i.id} />
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
