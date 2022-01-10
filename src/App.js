import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

function App() {

	// useSelector gives access to the whole state
	const counter = useSelector( state => state.counter)
	const isLogged = useSelector( state => state.isLogged )
	const dispatch = useDispatch();
  return (
    <div className="App">
		<h1>Tanya's Redux Example</h1>
		<span>Counter is at: {counter}</span>
		<div>
		<button onClick = {() => dispatch(increment())}>INCREMENT + </button>
		</div>
		<div>
		<button onClick = {() => dispatch(decrement())} >DECREMENT - </button>
		</div>
		<div>Authentication status: {isLogged ? 'Logged in' : 'Not logged in'}</div>
    </div>
  );
}

export default App;
