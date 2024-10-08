import Grid2 from '@mui/material/Grid';
import { QueueWrapper } from '../QueueWrapper/QueueWrapper';

export const QueueList: React.FC = () => {
  return (
    <div>
      <Grid2 container direction={'column'}>
        {[1, 2, 3, 4].map((i) => (
          <QueueWrapper num={i} />
        ))}
      </Grid2>
    </div>
  );
};
