// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container, Grid, Grid2 } from '@mui/material';
import styles from './app.module.scss';
import { QueueList } from './Components/QueueList/QueueList';
import { Backlog } from './Components/Backlog/Backlog';

export function App() {
  return (
    <div>
      <Grid2 container direction={'row'} justifyContent={'space-between'}>
        <Grid2 size={4}>
          <Backlog />
        </Grid2>
        <Grid2 size={8}>
          <QueueList />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
