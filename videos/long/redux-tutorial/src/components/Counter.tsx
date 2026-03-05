import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";



const Counter = () => {

  const count = useSelector((state: RootState) => state.value);
  const isPending = useSelector((state: RootState) => state.isPending)
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      {!isPending ? <h2>{count}</h2> : <h2>loading...</h2>}
      <div><button onClick={() => dispatch(incrementAsync(10))}>increment</button><button onClick={() => { dispatch(decrement()) }}>decrement</button></div>
    </div>
  );
};

export default Counter;
