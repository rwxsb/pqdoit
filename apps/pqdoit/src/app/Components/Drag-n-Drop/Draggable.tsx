import React from 'react';
import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { ReactJSX } from '@emotion/react/types/jsx-namespace';
import { Card, Grid2 } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';

interface IDraggableProps {
  id: UniqueIdentifier;
  children: ReactJSX.Element;
  disabled?: boolean;
  handle?: boolean;
  passedStyle: React.CSSProperties;
}

export const Draggable: React.FC<IDraggableProps> = ({
  id,
  children,
  disabled = false,
  handle,
  passedStyle,
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
    <Grid2
      alignItems={'center'}
      container
      direction={'row'}
      style={{ ...style, margin: '0.5em' }}
      ref={setNodeRef}
      {...(handle ? {} : listeners)}
      {...attributes}
    >
      <Card
        style={{
          ...passedStyle,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {handle ? <DragHandleIcon {...(handle ? listeners : {})} /> : null}
        {children}
      </Card>
    </Grid2>
  );
};
