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
