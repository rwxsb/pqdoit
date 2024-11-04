// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container, Grid, Grid2 } from '@mui/material';
import styles from './app.module.scss';
import { QueueList } from './Components/QueueList/QueueList';
import { Backlog } from './Components/Backlog/Backlog';
import { DndContext } from '@dnd-kit/core';
import { StickyComponent } from './Components/Sticky/Sticky';
import { createStore } from './createStore';
import { Provider } from 'react-redux';
import { Wrapper } from './Components/Wrapper/Wrapper';

export function App() {
  const store = createStore();
  return (
    <div>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </div>
  );
}

export default App;
