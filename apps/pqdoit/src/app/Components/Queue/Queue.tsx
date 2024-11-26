import { Stack } from '@mui/material';
import { Droppable } from '../Drag-n-Drop/Droppable';
import { IStickyProps, StickyComponent } from '../Sticky/Sticky';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useSelector } from 'react-redux';
import { IAppState } from '../../createStore';
import { SortableContext } from '@dnd-kit/sortable';
import { Sortable } from '../Drag-n-Drop/Sortable';

interface IQueueProps {
  id: UniqueIdentifier;
}

export interface IWrappedSticky {
  item: JSX.Element;
  props: IStickyProps;
}

export const Queue: React.FC<IQueueProps> = ({ id }) => {
  const stickies = useSelector((state: IAppState) => state.sticky.stickies);
  return (
    <Droppable id={id}>
      <Stack direction={'row'} spacing={1} minHeight={'5em'}>
        {stickies.map((sticky) =>
          sticky.parent === id ? (
            <StickyComponent
              key={`sticky-${id}-${sticky.id}`}
              id={sticky.id}
              text={sticky.text}
              color={sticky.color}
            />
          ) : null
        )}
      </Stack>
    </Droppable>
  );
};
