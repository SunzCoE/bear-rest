import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { deleteBear } from './actions';
import { deleteBear, createBear } from './actions';
//import axios from 'axios';
//import { createStore, applyMiddleware} from 'redux';
//import { createStore, applyMiddleware, combineReducers } from 'redux';
/*import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchBear } from './actions';*/

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
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

//let store = createStoreWithMiddleware(reducers) 

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
    this.state = {bearName: ''};
    /*this.state = {data: []};
  }
  componentDidMount(){
    /*axios.get('http://localhost:8000/api/bears')
    .then(result => {
      this.setState({data: result.data})
    })
    store.subscribe(() => {
      this.setState({data: store.getState().bear})
    })
    //store.dispatch(fetchBearActionCreator());
    store.dispatch(fetchBear());*/
  }
  onBearNameChanged = (e) => {
    this.setState({bearName: e.target.value});
  }
  toCreateBear = () => {
    this.props.createBear({name: this.state.bearName});
    this.setState({bearName: ''});
  }

  render() {
    //let bears = this.state.data;
    let bears = this.props.bear;
    return (
      //<div>Hello world</div>
      <div>
      {
        //bears.map(bear => <div key={bear.id}>{bear.name}</div>)
        bears.map(bear => (
          <div key={bear.id}>
          {bear.name}
          <button onClick={() => this.props.deleteBear(bear.id)}>X</button>
          </div>
        ))
      }
      <input value={this.state.bearName} onChange={this.onBearNameChanged}/>
      <button onClick={this.toCreateBear}>Add</button>
      </div>
    );
  }
}

//export default App;
let mapStateToProps = (state) => (
  {bear: state.bear}
)
//export default connect(mapStateToProps)(App);
export default connect(mapStateToProps, {
  //deleteBear: deleteBear
  deleteBear,
  createBear
})(App);

