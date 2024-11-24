import { Grid2, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Queue } from '../Queue/Queue';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../State/QueueActions';

interface QueueWrapperProps {
  id: UniqueIdentifier;
  title: string;
}

export const QueueWrapper: React.FC<QueueWrapperProps> = ({ id, title }) => {
  const [value, setValue] = useState(title);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (title !== value) {
      dispatch(setTitle({ id: id, title: value }));
    }
  };

  return (
    <Grid2 container gap={1} direction={'column'}>
      <Grid2 maxWidth={'20%'}>
        <TextField
          size="small"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid2>
      <Queue id={id} />
    </Grid2>
  );
};
