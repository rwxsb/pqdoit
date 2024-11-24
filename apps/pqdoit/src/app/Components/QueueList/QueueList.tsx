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

export const QueueList: React.FC = () => {
  const queues = useSelector((state: IAppState) => state.queue.queues);
  const dispatch = useDispatch();

  const handleAddQueue = () => {
    dispatch(addQueue({ id: uuidv4(), title: '' }));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = queues.findIndex((item) => item.id === active.id);
      const newIndex = queues.findIndex((item) => item.id === over?.id);
      dispatch(swapItems({ item1: oldIndex, item2: newIndex }));
      console.log('YABA DABA DUU');
    }
  };

  console.log('DEBUG - ', queues);

  return (
    <div>
      <Grid2 container direction={'column'} gap={5}>
        {queues.map((i, index) => (
          <>
            {console.log('DEBUG -', i.title)}
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
