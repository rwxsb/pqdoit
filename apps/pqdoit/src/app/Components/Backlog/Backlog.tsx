import { AddCircle } from '@mui/icons-material';
import { Button, Grid2 } from '@mui/material';
import { Droppable } from '../Drag-n-Drop/Droppable';
import { StickyColors, StickyComponent } from '../Sticky/Sticky';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../createStore';
import { addSticky } from '../../State/StickyActions';
import { v4 as uuidv4 } from 'uuid';

interface IBacklogProps {
  id: UniqueIdentifier;
  actionable?: boolean;
}

export const Backlog: React.FC<IBacklogProps> = ({ id, actionable = true }) => {
  const stickies = useSelector((state: IAppState) => state.sticky.stickies);
  const dispatch = useDispatch();

  const addCard = () => {
    const color = StickyColors[Math.floor(Math.random() * StickyColors.length)];
    dispatch(addSticky({ parent: id, id: uuidv4(), text: '', color: color }));
  };

  return (
    <Grid2 container justifyContent={'space-around'} direction={'column'}>
      {actionable && (
        <Grid2>
          <Button onClick={addCard} fullWidth>
            <AddCircle fontSize="large" />
          </Button>
        </Grid2>
      )}
      <Droppable id={id}>
        <Grid2
          maxWidth={'90%'}
          container
          flexWrap={'wrap'}
          minHeight={'13em'}
          minWidth={'13em'}
        >
          {stickies.map((sticky, index) =>
            sticky.parent === id ? (
              <StickyComponent
                key={`backlog-item-${index}`}
                id={sticky.id}
                text={sticky.text}
                color={sticky.color}
                actionable={actionable}
                disabled={!actionable}
              />
            ) : null
          )}
        </Grid2>
      </Droppable>
    </Grid2>
  );
};
