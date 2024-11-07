import { AddCard, AddCircle } from '@mui/icons-material';
import {
  Button,
  Card,
  Container,
  Grid2,
  Input,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Droppable } from '../Drag-n-Drop/Droppable';
import { StickyComponent } from '../Sticky/Sticky';
import { UniqueIdentifier } from '@dnd-kit/core';
import { IWrappedSticky } from '../Queue/Queue';
import { Sticky } from '../../State/StickyReducer';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../createStore';
import { addSticky } from '../../State/StickyActions';
import { v4 as uuidv4 } from 'uuid';

interface IBacklogProps {
  id: UniqueIdentifier;
}

export const Backlog: React.FC<IBacklogProps> = ({ id }) => {
  const stickies = useSelector((state: IAppState) => state.sticky.stickies);
  const dispatch = useDispatch();

  const addCard = () => {
    dispatch(addSticky({ parent: id, id: uuidv4() }));
  };

  return (
    <Grid2 container justifyContent={'space-around'} direction={'column'}>
      <Grid2>
        <Button onClick={addCard} fullWidth>
          <AddCircle fontSize="large" />
        </Button>
      </Grid2>
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
              />
            ) : null
          )}
        </Grid2>
      </Droppable>
    </Grid2>
  );
};
