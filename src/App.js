import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './store/indexStore';

export const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
