var redux = require('redux');
var mang = require('./mang.js');
var isAdding = require('./isAdding.js');
var reducer = redux.combineReducers({mang, isAdding});

module.exports = reducer;