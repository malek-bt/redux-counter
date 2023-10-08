
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
import { ShowInfo } from './component/ShowInfo';
function App() {
  const count = useSelector((state) => state.counter.count)
  //const count = useSelector((state)=> state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>The count is : {count} </h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(2))}>increment by 2</button>

      <ShowInfo/>
      
    </div>
  );
}

export default App;
