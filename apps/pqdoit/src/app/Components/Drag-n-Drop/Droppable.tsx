import React from 'react';
import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import { ReactJSX } from '@emotion/react/types/jsx-namespace';
import { Paper } from '@mui/material';

interface IDroppable {
  id: UniqueIdentifier;
  children: ReactJSX.Element;
}

export const Droppable: React.FC<IDroppable> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    borderRadius: '5px',
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Paper style={{ background: '#F5F5F5' }} elevation={isOver ? 24 : 4}>
        {children}
      </Paper>
    </div>
  );
};
