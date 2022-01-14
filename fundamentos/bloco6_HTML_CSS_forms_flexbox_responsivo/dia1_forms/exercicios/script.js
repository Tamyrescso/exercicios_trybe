const estados = ['Escolha seu estado','Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const valueEstados = ["",'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
const ids = ['nome', 'email', 'cpf', 'endereco', 'cidade', 'estado', 'casa', 'resumo', 'cargo', 'descricao', 'data_inicio'];
const estadoSelection = document.getElementById('estado');
const submitButton = document.getElementById('button-submit');
const output = document.getElementById('output');
const resetButton = document.getElementById('button-reset');

function createOptionsEstado () {
    for (let index = 0; index < estados.length; index += 1) {
        let optionEstado = document.createElement('option');
        optionEstado.innerText = estados[index];
        optionEstado.value = valueEstados[index];
        estadoSelection.appendChild(optionEstado);
    }
}
window.onload = createOptionsEstado ();

submitButton.addEventListener('click', submit);
function submit (event) {
    event.preventDefault();
    validation();
}


function checkDate () {
    let dateValue = document.getElementById('data_inicio').value;
    if (dateValue.length !== 10 || dateValue[2] !== "/" || dateValue[5] !== "/") {
        alert('Tamanho e/ou formato de data inválido!');
    } else if (parseInt(dateValue[0] + dateValue[1]) <= 00 || parseInt(dateValue[0] + dateValue[1]) > 31) {
        alert('Dia em formato errado!');
    } else if (parseInt(dateValue[3] + dateValue[4]) <= 00 || parseInt(dateValue[3] + dateValue[4]) > 12) {
        alert('Mês em formato errado!');
    } else if (dateValue[6] === '-') {
        alert('O ano não pode ser negativo!')
    } else {
        insertResult();
    }
}

function validation () {
    let result = false;
    for (let index = 0; index < ids.length; index += 1) {
        let campo = document.getElementById(ids[index]);
        if (campo.value === "" ) {
            alert("Campo " + ids[index] + " é obrigatório!")
            campo.focus();
            break;
        }  else if (campo.value === 'casa' && campo.checked === false && document.getElementById('apartamento').checked === false) {
            alert("Campo casa/apartamento é obrigatório!");
            break;
        }  else if (ids[index] === ids[ids.length-1]) {
            result = true;
        }
    }
    if (result === true) {
        checkDate();
    }
}
    
function insertResult () {
    for (let index = 0; index < ids.length; index += 1) {
        let campo = document.getElementById(ids[index]);
        if (campo.value === 'casa' && campo.checked === true) {
            outputDiv('tipo', campo.value);
        } else if (campo.value !== 'casa' && campo.value !== 'apartamento') {
            outputDiv(ids[index], campo.value)
        } else {
            outputDiv('tipo', 'apartamento');
        }
    }
}

function outputDiv (key,value) {
    let outputKey = [];
    let outputValue = [];
    outputKey.push(key);
    outputValue.push(value);
    let realOutput = outputKey + ": " + outputValue;
    let pOutput = document.createElement('p');
    pOutput.innerText = realOutput;
    output.appendChild(pOutput);
}

resetButton.addEventListener('click', clearDiv);
function clearDiv () {
    output.innerText = "";
}