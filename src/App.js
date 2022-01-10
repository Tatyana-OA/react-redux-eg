import {useSelector} from 'react-redux';

function App() {

	// useSelector gives access to the whole state
	const counter = useSelector( state => state.counter)
	const isLogged = useSelector( state => state.isLogged )
  return (
    <div className="App">
		<h1>Tanya's Redux Example</h1>
		<span>Counter is at: {counter}</span>
		<div>
		<button>INCREMENT + </button>
		</div>
		<div>
		<button>DECREMENT - </button>
		</div>
		<div>Authentication status: {isLogged ? 'Logged in' : 'Not logged in'}</div>
    </div>
  );
}

export default App;
