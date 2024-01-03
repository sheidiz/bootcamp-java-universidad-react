import './App.css'
import { Provider } from 'react-redux';
import EcomerceStore from './redux/store';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <Provider store={EcomerceStore}>
      <AppRouter />
    </Provider>
  )
}

export default App