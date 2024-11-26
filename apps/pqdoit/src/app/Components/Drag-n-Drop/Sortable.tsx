import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { UniqueIdentifier } from '@dnd-kit/core';
import { ReactJSX } from '@emotion/react/types/jsx-namespace';
import DragHandleIcon from '@mui/icons-material/DragHandle';

interface ISortableProps {
  id: UniqueIdentifier;
  children: ReactJSX.Element;
  handle?: boolean;
}

export const Sortable: React.FC<ISortableProps> = ({
  id,
  children,
  handle = true,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
