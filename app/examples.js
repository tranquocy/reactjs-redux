var redux = require('redux');

var defaultState = {
  mang: ['Android', 'NodeJS', 'PHP'],
  isAdding: false
}

var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return {...state, isAdding: !state.isAdding}
    case 'ADD_ITEM':
      return {...state, mang: [...state.mang, action.item]}
    case 'REMOVE_ITEM':
      return {...state, mang: state.mang.filter((e, i) => i!=action.index)}
    default:
    return state;
  }
}

var store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch({type: 'TOGGLE_IS_ADDING'});

console.log(store.getState());

store.dispatch({
  type: 'ADD_ITEM',
  item: 'CSS'
});

console.log(store.getState());

store.dispatch({
  type: 'REMOVE_ITEM',
  index: 4
})

console.log(store.getState());