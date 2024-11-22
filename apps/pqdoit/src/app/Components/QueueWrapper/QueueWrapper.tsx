import { Grid2, Paper, TextField } from '@mui/material';
import React from 'react';
import { Queue } from '../Queue/Queue';
import { UniqueIdentifier } from '@dnd-kit/core';

interface QueueWrapperProps {
  id: UniqueIdentifier;
}

export const QueueWrapper: React.FC<QueueWrapperProps> = ({ id }) => {
  return (
    <Grid2 container gap={1} direction={'column'}>
      <Grid2 maxWidth={'20%'}>
        <TextField size="small" />
      </Grid2>
      <Queue id={id} />
    </Grid2>
  );
};
