const listAlterations = document.getElementById('list-alterations');
const alterations = ['Cor de fundo', 'Cor do texto', 'Tamanho da fonte', 'Espaço entre linhas', 'Tipo da fonte'];
const colors = ['red', 'yellow', 'blue', 'brown', 'pink', 'purple', 'green', 'black', 'white'];
const idBody = document.getElementById('all-elements');



//Cria os itens do menu lateral e formatação. Faz iterações na quantidade do array alterations, nessas iterações cria as li com padding de 20px, com a classe item-menu e cada uma com o innerText retirado do array de referência e por último coloca como filho do ul listAlterations.
function menuAlterations() {
    for(let options of alterations) {
        let itemMenu = document.createElement('li');
        itemMenu.style.padding = '20px'
        itemMenu.className = 'item-menu';
        itemMenu.innerText = options;
        listAlterations.appendChild(itemMenu);
    }
}
menuAlterations();
//Executa a função getPreferences assim que a página é carregada. Nessa função, cada item que está localStorage é resgatado e aplicado.
window.onload = getPreferences;
function getPreferences () {
    let backgroundPref = localStorage.getItem('backColor');
    idBody.style.backgroundColor = backgroundPref;

    let colorPref = localStorage.getItem('textColor');
    idBody.style.color = colorPref;

    let article = document.getElementById('container-article');
    let size = localStorage.getItem('fontSize');
    article.style.fontSize = size;

    let space = localStorage.getItem('sapaceLines');
    article.style.lineHeight = space;

    let font = localStorage.getItem('fontType');
    idBody.style.fontFamily = font;
}
//Remove os itens do localStorage de acordo com a chave de input e substitui pelo novo valor e a mesma chave.
function savePreferences (key, value) {
    localStorage.removeItem(key);
    localStorage.setItem(key, (value));
}
//Resgata o primeiro item com classe item-menu e adiciona um escutador do tipo clique que executa a função changeBackgroundColor. Nessa função, é buscada a cor atual do fundo do body e procurado o index dessa cor no array colors. Depois a cor de fundo do body é alterada para o próximo index no array e se estiver no último item do array a cor é alterada para a primeira opção do array. Por último, executa a função savePreferences criando uma chave e usando a cor que foi escolhida por último.
const backgroundColor = document.getElementsByClassName('item-menu')[0];
backgroundColor.addEventListener('click', changeBackgroundColor);
function changeBackgroundColor () {
    let iCurrentColor = colors.indexOf(idBody.style.backgroundColor);
    idBody.style.backgroundColor = colors[iCurrentColor+1];
    if (iCurrentColor === colors.length-1) {
        idBody.style.backgroundColor = colors[0];
    }
    let backgroundColor = idBody.style.backgroundColor;
    savePreferences('backColor', backgroundColor);
}
//Resgata o segundo item com classe item-menu e adiciona um escutador do tipo clique que executa a função changeTextColor Nessa função, é buscada a cor atual da fonte do body e procurado o index dessa cor no array colors. Depois a cor de fundo do body é alterada para o próximo index no array e se estiver no último item do array a cor é alterada para a primeira opção do array. Por último, executa a função savePreferences criando uma chave e usando a cor que foi escolhida por último.
const textColor = document.getElementsByClassName('item-menu')[1];
textColor.addEventListener('click', changeTextColor);
function changeTextColor () {
    let iCurrentColor = colors.indexOf(idBody.style.color);
    idBody.style.color = colors[iCurrentColor+1];
    if (iCurrentColor === colors.length-1) {
        idBody.style.color = colors[0];
    }
    let textColor = idBody.style.color;
    savePreferences('textColor', textColor);
}
//Resgata o terceiro item com classe item-menu e adiciona um escutador do tipo clique que executa a função changeFontSize. Nessa função, é buscado elemento com id container-article, se a fonte tiver tamanho 15px troca para 20px, se tiver 20px troca para 25px, senão troca para 15px. Por último, executa a função savePreferences criando uma chave e usando o tamanho que foi escolhido por último.
const fontSize = document.getElementsByClassName('item-menu')[2];
fontSize.addEventListener('click', changeFontSize);
function changeFontSize () {
    let article = document.getElementById('container-article');
    if (article.style.fontSize == '15px') {
        article.style.fontSize = '20px';
    } else if (article.style.fontSize == '20px') {
        article.style.fontSize = '25px';
    } else {
        article.style.fontSize = '15px';
    }
    let fontSize = document.getElementById('container-article').style.fontSize;
    savePreferences('fontSize', fontSize);
}
//Resgata o quarto item com classe item-menu e adiciona um escutador do tipo clique que executa a função changeSpaceLines. Nessa função, é buscado elemento com id container-article, se a altura distância entre as linhas tiver 20px troca para 30px, se tiver 30px troca para 40px, senão troca para 20px. Por último, executa a função savePreferences criando uma chave e usando o tamanho que foi escolhido por último.
const spaceLines = document.getElementsByClassName('item-menu')[3];
spaceLines.addEventListener('click', changeSpaceLines);
function changeSpaceLines() {
    let article = document.getElementById('container-article');
    if (article.style.lineHeight == '20px') {
        article.style.lineHeight = '30px';
    } else if (article.style.lineHeight == '30px') {
        article.style.lineHeight = '40px';
    } else {
        article.style.lineHeight = '20px';
    }
    let spaceLines = document.getElementById('container-article').style.lineHeight;
    savePreferences('spaceLines', spaceLines);
}
//Resgata o quinto item com classe item-menu e adiciona um escutador do tipo clique que executa a função changeFontType. Em seguida diz que a fonte do body é 'Inria Serif'. Na função diz que se a fonte do body for 'Inria Serif' então deve trocar para 'VT323', se for esta última, deve trocar para 'Rajdhani', se for esta última, troca para 'Style Script' senão, troca para 'Inria Serif'. Por último, executa a função savePreferences criando uma chave e usando o tipo que foi escolhido por último.
const fontType = document.getElementsByClassName('item-menu')[4];
fontType.addEventListener('click', changeFontType);
idBody.style.fontFamily = 'Inria Serif';
function changeFontType() {
    //utilizar "\" antes e \"" depois de Inria Serif foi necessário para ser igual ao valor passado body quando sua cor é buscada, depois de alterada, não precisa mais dos símbolos.
    if (idBody.style.fontFamily == "\"Inria Serif\"" ) {
        idBody.style.fontFamily = 'VT323';
    } else if (idBody.style.fontFamily == 'VT323') {
        idBody.style.fontFamily = 'Rajdhani';
    } else if (idBody.style.fontFamily == 'Rajdhani') {
        idBody.style.fontFamily = 'Style Script';
    } else {
        idBody.style.fontFamily = 'Inria Serif';
    }
    let fontType = idBody.style.fontFamily;
    savePreferences('fontType', fontType);
}
