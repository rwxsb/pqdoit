import {
  Active,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/core';
import { Grid2 } from '@mui/material';
import { Backlog } from '../Backlog/Backlog';
import { QueueList } from '../QueueList/QueueList';
import { useDispatch, useSelector } from 'react-redux';
import { setParent } from '../../State/StickyActions';
import { IAppState } from '../../createStore';
import { swapItems } from '../../State/QueueActions';
import { useCallback, useMemo, useState } from 'react';

export const Wrapper: React.FC = () => {
  const dispatch = useDispatch();
  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    over && dispatch(setParent({ id: active.id, parentId: over?.id }));
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Grid2
        container
        direction={'row'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Grid2 size={2}>
          <Backlog id="backlog" />
        </Grid2>
        <Grid2 size={7}>
          <QueueList />
        </Grid2>
        <Grid2 size={2}>
          <Backlog id="done" actionable={false} />
        </Grid2>
      </Grid2>
    </DndContext>
  );
};
