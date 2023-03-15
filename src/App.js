import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import { getuserfetch } from './actions';


function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.reducer.users);
  //const email = useSelector(state => state.reducer.email);

  return (
    <div className="App">
        <button onClick={() => dispatch(getuserfetch())}>Get Users</button>

        <div>Users : {users.map((user => (<div>{user.name}&nbsp;&nbsp{user.email}</div>)))}</div>
        {/* <div>Email : {email.map((email => (<div>{email.email}</div>)))}</div>
    */}
   
    </div>
  );
}

export default App;
