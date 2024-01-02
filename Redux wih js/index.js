import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
const store = createStore(reducer, applyMiddleware(logger.default));
const history = []
function reducer(state = {amount: 1}, action){
    if (action.type === "increament") {
        return {amount: state.amount + action.payload}
    }
    return state
}

// store.subscribe(()=>{
//     history.push(store.getState())
//     console.log(history)

// })

setInterval(()=>{
    store.dispatch({type: "increament", payload: 4})

},3000)

