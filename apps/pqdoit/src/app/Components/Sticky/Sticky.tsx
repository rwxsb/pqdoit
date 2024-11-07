import { Card, Input, TextField } from '@mui/material';
import { Draggable } from '../Drag-n-Drop/Draggable';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '../../State/StickyActions';

export interface IStickyProps {
  id: UniqueIdentifier;
  text: string;
}

export const StickyComponent: React.FC<IStickyProps> = ({ id, text }) => {
  const [value, setValue] = useState(text);
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.altKey && setIsEditable(true); // Enables edit mode
  };

  const handleBlur = () => {
    setIsEditable(false);
    if (text !== value) {
      dispatch(setText({ id: id, text: value }));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setValue(event.target.value);
  };

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditable]);

  return (
    <Draggable id={id} disabled={isEditable}>
      {/*<Card style={{ minWidth: '10em', minHeight: '10em', margin: '0.5em' }}>*/}
      <TextField
        multiline
        fullWidth
        type="text"
        style={{
          minWidth: '10em',
          maxHeight: '10em',
          margin: '0.5em',
          boxSizing: 'border-box',
        }}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        inputRef={inputRef}
      />
    </Draggable>
  );
};
