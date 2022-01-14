
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const actionPrevious = () => {
    store.dispatch({type: PREVIOUS_COLOR});
};

const actionNext = () => {
    store.dispatch({type: NEXT_COLOR});
};

const actionRandom = () => {
    store.dispatch({type: RANDOM_COLOR});
};

const btnPrev = document.getElementById("previous");
const btnNext = document.getElementById("next");
const btnRandom = document.getElementById("random");

btnPrev.addEventListener("click", actionPrevious);
btnNext.addEventListener("click", actionNext);
btnRandom.addEventListener("click", actionRandom);

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {
        case NEXT_COLOR:
            return {
                colors: [...state.colors],
                index: state.index === state.colors.length-1? 0 : state.index + 1,
            }
        case PREVIOUS_COLOR:
            return {
                colors: [...state.colors],
                index: state.index === 0? state.colors.length-1 : state.index - 1,
            }
        case RANDOM_COLOR:
            return {
                colors: [...state.colors, criarCor()],
                index: state.colors.length,
            }
        default:
            return state;
    }
}
const store = Redux.createStore(reducer);

store.subscribe(() => {
    const { colors, index } = store.getState();
    const colorName = document.getElementById('value');
    colorName.innerHTML = colors[index];
    const container = document.getElementById('container');
    container.style.backgroundColor = colors[index];
    console.log(store.getState())
})