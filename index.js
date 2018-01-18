const createStore = require("redux").createStore;

const reducer = (state, action) => {
  switch(action.type) {
    case "GREETING": {
      return Object.assign({}, state, {
        greeting: action.payload
      });
    }
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "GREETING",
  payload: "Hello World!"
});
