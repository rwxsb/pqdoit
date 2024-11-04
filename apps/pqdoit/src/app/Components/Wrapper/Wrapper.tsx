import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Grid2 } from '@mui/material';
import { Backlog } from '../Backlog/Backlog';
import { QueueList } from '../QueueList/QueueList';
import { useDispatch, useSelector } from 'react-redux';
import { setParent } from '../../State/StickyActions';

export const Wrapper: React.FC = () => {
  const dispatch = useDispatch();
  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    over && dispatch(setParent({ id: active.id, parentId: over?.id }));
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Grid2 container direction={'row'} justifyContent={'space-between'}>
        <Grid2 size={4}>
          <Backlog id="backlog" />
        </Grid2>
        <Grid2 size={8}>
          <QueueList />
        </Grid2>
      </Grid2>
    </DndContext>
  );
};
