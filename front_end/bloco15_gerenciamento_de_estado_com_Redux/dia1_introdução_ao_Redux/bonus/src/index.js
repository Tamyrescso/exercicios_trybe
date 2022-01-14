const showCountValue = (counter, counterClick) => {
    const h1Element = document.getElementById("counter");
    h1Element.innerText = counter;
    const pElement = document.getElementById("counterClick");
    pElement.innerHTML = counterClick;
  };
  
  showCountValue(0,0);
  
const showAddedValue = (addedValues) => {
  const pvalues = document.getElementById('addedValues');
  let stringValues = '';
  addedValues.forEach((value, index) => {
    index === addedValues.length-1?
    stringValues += `${value}`
    :
    stringValues += `${value}, `
  })
  pvalues.innerText = stringValues;
}

  const btnInc = document.getElementById("inc");
  const btnDec = document.getElementById("dec");
  const inputAdd = document.getElementById('add');
  const inputSub = document.getElementById('sub');
  
  
  const INCREMENTO = "INCREMENTO";
  const DECREMENTO = "DECREMENTO";
  
  const actionIncremento = () => {
    !inputAdd.value?
    store.dispatch({
      type: INCREMENTO,
      value: 1,
      counterClick: 1,
      addedValues: 1,
    })
    :
    store.dispatch({
      type: INCREMENTO,
      value: parseInt(inputAdd.value),
      counterClick: 1,
      addedValues: parseInt(inputAdd.value),
    })
  };
  
  const actionDecremento = () => {
    !inputSub.value?
    store.dispatch({
      type: DECREMENTO,
      value: 1,
      counterClick: 1,
      addedValues: 1,
    })
    :
    store.dispatch({
      type: DECREMENTO,
      value: parseInt(inputSub.value),
      counterClick: 1,
      addedValues: parseInt(inputSub.value),
    })
  };
  
  btnInc.addEventListener("click", actionIncremento);
  btnDec.addEventListener("click", actionDecremento);

  const initialState = {counter: 0, counterClick: 0, addedValues: []};
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case INCREMENTO:
        return {
          counter: state.counter + action.value,
          counterClick: state.counterClick + action.counterClick,
          addedValues: [...state.addedValues, action.value],
        }
      case DECREMENTO:
        return {
          counter: state.counter - action.value,
          counterClick: state.counterClick + action.counterClick,
          addedValues: [...state.addedValues, `-${action.value}`],
        }
      default:
        return state;
    }
  };
  
  const store = Redux.createStore(reducer);
  
  store.subscribe(() => {
    const { counter, counterClick, addedValues } = store.getState();
    showCountValue(counter, counterClick);
    showAddedValue(addedValues);
  });
  