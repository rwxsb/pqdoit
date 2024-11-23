import { createStore } from './createStore';
import { Provider } from 'react-redux';
import { Wrapper } from './Components/Wrapper/Wrapper';

export function App() {
  const store = createStore();
  return (
    <div style={{ background: '#F5F5F5', height: '99vh' }}>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </div>
  );
}

export default App;
