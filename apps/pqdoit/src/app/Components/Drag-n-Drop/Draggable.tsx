import React from 'react';
import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { ReactJSX } from '@emotion/react/types/jsx-namespace';

interface IDraggableProps {
  id: UniqueIdentifier;
  children: ReactJSX.Element;
  disabled?: boolean;
}

export const Draggable: React.FC<IDraggableProps> = ({
  id,
  children,
  disabled = false,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    disabled,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        opacity: 2,
      }
    : undefined;

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...(!disabled ? listeners : {})}
      {...(!disabled ? attributes : {})}
    >
      {children}
    </div>
  );
};
