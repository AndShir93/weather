import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Clock from './components/Clock';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({type: 'INC', payload: 1})
  }
  const decrement = () => {
    dispatch({type: 'DEC', payload: 1})
  }
  return (
    <div className="App">
      {count}
      <br/>
      <button onClick={() => increment()}>+</button>
      <button onClick={decrement}>-</button>
      <Clock/>
    </div>
  );
}

export default App;
