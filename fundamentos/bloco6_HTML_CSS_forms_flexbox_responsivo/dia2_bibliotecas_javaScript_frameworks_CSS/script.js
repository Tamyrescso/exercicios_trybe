const estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const valueEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
const estadoSelection = document.getElementById('estado');
const submit = document.getElementById('button-submit');
const output = document.getElementById('output');
let picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
});

function createOptionsEstado () {
    for (let index = 0; index < estados.length; index += 1) {
        let optionEstado = document.createElement('option');
        optionEstado.innerText = estados[index];
        optionEstado.value = valueEstados[index];
        estadoSelection.appendChild(optionEstado);
    }
}
createOptionsEstado ();

submit.addEventListener('click', prevent);
function prevent (event) {
    event.preventDefault();
}
let moment = require("moment");
console.log(moment)
