import { Grid2, TextField } from '@mui/material';
import { Draggable } from '../Drag-n-Drop/Draggable';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '../../State/StickyActions';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const StickyColors: string[] = [
  '#FFA', // Original pastel yellow
  '#FFD8A8', // Soft pastel orange
  '#FFC1D3', // Soft pastel pink
  '#D8F7C5', // Soft pastel green
  '#C7E8F7', // Soft pastel blue
];

export interface IStickyProps {
  id: UniqueIdentifier;
  text: string;
  color: string;
}

export const StickyComponent: React.FC<IStickyProps> = ({
  id,
  text,
  color,
}) => {
  const [value, setValue] = useState(text);
  const dispatch = useDispatch();

  const handleBlur = () => {
    if (text !== value) {
      dispatch(setText({ id: id, text: value }));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setValue(event.target.value);
  };

  return (
    <Draggable
      id={id}
      handle
      passedStyle={{ background: color, borderRadius: '2%' }}
    >
      <Grid2 container direction={'row'}>
        <TextField
          multiline
          fullWidth
          type="text"
          style={{
            margin: '0.5em',
          }}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid2>
    </Draggable>
  );
};
