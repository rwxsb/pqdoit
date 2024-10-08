import { Container } from '@mui/material';
import React from 'react';
import { Queue } from '../Queue/Queue';

interface QueueWrapperProps {
  num: number;
}

export const QueueWrapper: React.FC<QueueWrapperProps> = ({ num }) => {
  return (
    <Container>
      <div>
        <Queue />
      </div>
    </Container>
  );
};
