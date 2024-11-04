import React from 'react';
import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import { ReactJSX } from '@emotion/react/types/jsx-namespace';
import { borderColor, borderRadius } from '@mui/system';

interface IDroppable {
  id: UniqueIdentifier;
  children: ReactJSX.Element;
}

export const Droppable: React.FC<IDroppable> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    border: isOver ? '1px solid green' : undefined,
    borderRadius: '5px',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
