import { Container } from '@mui/material';
import React from 'react';

interface QueueWrapperProps {
  num: number;
}

export const QueueWrapper: React.FC<QueueWrapperProps> = ({ num }) => {
  return <Container>{num}</Container>;
};
