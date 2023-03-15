import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS, GET_USERS_ERROR } from './actions';

function * userfetch() 
{
  try 
  {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    return data;
  }
  catch (error) 
  {
    //throw error;
    console.log('Wrong Api URL.....');
  }
}
  
function * workgetusersfetc() {
  try 
  {
    const users = yield call(userfetch);
    yield put({ type: GET_USERS_SUCCESS, users });
  } 
  catch (error)
  {
    yield put({ type: GET_USERS_ERROR, error });
  }
}

function * mysaga() 
{
  yield takeEvery(GET_USERS_FETCH, workgetusersfetc);
}

export default mysaga;
