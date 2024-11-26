import Grid2 from '@mui/material/Grid';
import { QueueWrapper } from '../QueueWrapper/QueueWrapper';
import { Button, Divider } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../createStore';
import { addQueue, swapItems } from '../../State/QueueActions';
import { SortableContext } from '@dnd-kit/sortable';
import { Sortable } from '../Drag-n-Drop/Sortable';
import { DragEndEvent } from '@dnd-kit/core';
import { useEffect, useState } from 'react';

export const QueueList: React.FC = () => {
  const queues = useSelector((state: IAppState) => state.queue.queues);
  const dispatch = useDispatch();

  const handleAddQueue = () => {
    dispatch(addQueue({ id: uuidv4(), title: '' }));
  };

  return (
    <div>
      <Grid2 container direction={'column'} gap={5}>
        {queues.map((i, index) => (
          <>
            <QueueWrapper key={`queue-${index}`} id={i.id} title={i.title} />
            <Divider />
          </>
        ))}
        <Button onClick={handleAddQueue} fullWidth>
          <AddCircleIcon />
        </Button>
      </Grid2>
    </div>
  );
};
