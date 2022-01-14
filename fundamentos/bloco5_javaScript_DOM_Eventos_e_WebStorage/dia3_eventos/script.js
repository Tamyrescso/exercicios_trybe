function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.getElementById('days');
  function calendarDays() {
    for (let i of dezDaysList) {
      let day = document.createElement('li');
      day.innerText = i;
      day.className = 'day';
      days.appendChild(day);
      if (i === 24 || i === 31) {
        day.classList.add('holiday');
      } else if (i === 4 || i === 11 || i === 18) {
        day.classList.add('friday');
      } else if (i === 25) {
        day.classList.add('holiday');
        day.classList.add('friday');
      }
    }
  }
  calendarDays();

  //Exercicio 2
  function holidayButton(string, nameId) {
    const buttonsFather = document.getElementsByClassName('buttons-container')[0];
    const buttonH = document.createElement('button');
    buttonH.innerText = string;
    buttonH.id = nameId;
    buttonsFather.appendChild(buttonH);
  }
  holidayButton('Feriados', 'btn-holiday');

  //Exercicio 3
  const buttonH = document.getElementById('btn-holiday');
  buttonH.addEventListener('click', clickHoliday);
  function clickHoliday() {
    let daysH = document.getElementsByClassName('holiday');
    for (let i of daysH) {
      if (i.style.backgroundColor === 'rgb(238, 238, 238)') {
      i.style.backgroundColor = 'red';
      } else {
        i.style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }

  }

  //Exercicio 4
  holidayButton('Sexta-Feira', 'btn-friday');

  //Exercicio 5
  const buttonF = document.getElementById('btn-friday');
  buttonF.addEventListener('click', clickFriday);
  let num = [4,11,18,25];
  function clickFriday() {
    let daysF = document.getElementsByClassName('friday');
    for (let i = 0; i < daysF.length; i += 1) {
      if (daysF[i].innerText === '4' || daysF[i].innerText === '11' || daysF[i].innerText === '18' || daysF[i].innerText === '25') {
      daysF[i].innerHTML = 'Sexta-feira';
      } else {
        daysF[i].innerText = num[i];
      }
    }
  
  }
  //Exercicio 6
    let zoomDay = document.getElementById('days');
    zoomDay.addEventListener('mouseover', zoomActive);
    function zoomActive(event) {
      event.target.style.fontSize = "30px"
    }
    zoomDay.addEventListener('mouseout', zoomInactive);
    function zoomInactive(event) {
      event.target.style.fontSize = "20px"
    }

  //Exercicio 7
  const fatherTasks = document.getElementsByClassName('my-tasks')[0];
  function addTask(task) {
    const span = document.createElement('span');
    span.innerText = task;
    fatherTasks.appendChild(span);


  }
  addTask('Terminar os exercícios da Trybe no horário');

  //Exercicio 8
  function addColor(color) {
    const divColor = document.createElement('div');
    divColor.className = 'task';
    divColor.style.backgroundColor = color;
    fatherTasks.appendChild(divColor);
  }
  addColor('red');

  //Exercicio 9
  let taskS = document.getElementsByClassName('task')[0];
  taskS.addEventListener('click', taskSelection);
  function taskSelection () {
    if (taskS.classList.contains('selected')) {
      taskS.classList.remove('selected');
          
    } else {
      taskS.classList.add('selected');
    }
  }

  //Exercicio 10
  let colorDay = document.getElementById('days');
    colorDay.addEventListener('click', colorTaskDay);
    function colorTaskDay(event) {
        let divColor = document.getElementsByClassName('task selected')[0];
        if (event.target.style.color === divColor.style.backgroundColor) {
        event.target.style.color = "rgb(119, 119, 119)";
      } else {
        event.target.style.color = divColor.style.backgroundColor;
      }
      
    }
    //Bônus
    const add = document.getElementById('btn-add');
    add.addEventListener('click', appoint);
    
    function appoint() {
      let textInput = document.getElementById('task-input');
      if (textInput.value === '') {
        alert('ERRO! Nenhum compromisso foi adicionado');
      } else {
        let item = document.createElement('li');
        item.innerText = textInput.value;
        let list = document.getElementsByClassName('task-list')[0];
        list.appendChild(item);
      }
    }
    let taskInput = document.getElementById('task-input');
    taskInput.addEventListener('keyup', addTaskEnter);

    function addTaskEnter(event) {
      let textInput = document.getElementById('task-input');
      if (event.keyCode === 13) {
        let item = document.createElement('li');
        item.innerText = textInput.value;
        let list = document.getElementsByClassName('task-list')[0];
        list.appendChild(item);
      }
    }
    