let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
function render(){
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

function dispatch(action){
  state = changeState(state, action)
  render();
}

dispatch({ type: "counter/increment" });
dispatch({ type: "counter/increment" });


let action = { type: "counter/increment" };

changeState(state, action);

render();

