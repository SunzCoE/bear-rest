import React, { Component } from 'react';
//import axios from 'axios';
//import { createStore, applyMiddleware} from 'redux';
//import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchBear } from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
/*let bearReducer = function(state = [], action){
  if(action){
    if(action.type == 'FETCH_BEAR'){
      return action.payload
    }
  }
  return state
}
let store = createStoreWithMiddleware(combineReducers({
    bear: bearReducer
  }))*/

let store = createStoreWithMiddleware(reducers) 

/*let fetchBearActionCreator = function(){
  return (dispatch) => {
    axios.get('http://localhost:8000/api/bears')
    .then(result => {
      dispatch({type: 'FETCH_BEAR', payload: result.data})
    })
  }
}*/

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data: []};
  }
  componentDidMount(){
    /*axios.get('http://localhost:8000/api/bears')
    .then(result => {
      this.setState({data: result.data})
    })*/
    store.subscribe(() => {
      this.setState({data: store.getState().bear})
    })
    //store.dispatch(fetchBearActionCreator());
    store.dispatch(fetchBear());
  }
  render() {
    let bears = this.state.data;
    return (
      //<div>Hello world</div>
      <div>
      {
        bears.map(bear => <div key={bear.id}>{bear.name}</div>)
      }
      </div>
    );
  }
}

export default App;
