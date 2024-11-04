import React from 'react';
import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { ReactJSX } from '@emotion/react/types/jsx-namespace';

interface IDraggableProps {
  id: UniqueIdentifier;
  children: ReactJSX.Element;
}

export const Draggable: React.FC<IDraggableProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        opacity: 2,
      }
    : undefined;

  return (
    <div style={style} ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  );
};
