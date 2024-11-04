import { Card, Input, TextField } from '@mui/material';
import { Draggable } from '../Drag-n-Drop/Draggable';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useState } from 'react';

export interface IStickyProps {
  id: UniqueIdentifier;
}

export const StickyComponent: React.FC<IStickyProps> = ({ id }) => {
  const [value, setValue] = useState('Describe your task');
  return (
    <Draggable id={id}>
      <Card style={{ minWidth: '10em', minHeight: '10em', margin: '.5em' }}>
        <TextField
          aria-readonly
          multiline={true}
          fullWidth={true}
          type="text"
          style={{ padding: '0', opacity: 0 }}
          value={value}
          rows={7}
        />
      </Card>
    </Draggable>
  );
};
