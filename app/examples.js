var redux = require('redux');

var mangReducer = (state = ['Android', 'NodeJS', 'PHP']) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state.mang, action.item]
    case 'REMOVE_ITEM':
      return state.filter((e, i) => i!=action.index)
    default:
    return state;
  }
}

var isAddingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return !state.isAdding
    default:
    return state;
  }
}

var reducer = redux.combineReducers({
  mang: mangReducer,
  isAdding: isAddingReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension?window.devToolsExtension(): f => f
));

store.subscribe(() => {
  var str = store.getState();
  document.getElementById('p-detail').innerHTML = JSON.stringify(str);
});


store.dispatch({type: 'TOGGLE_IS_ADDING'});

store.dispatch({
  type: 'ADD_ITEM',
  item: 'CSS'
});


store.dispatch({
  type: 'REMOVE_ITEM',
  index: 2
})
