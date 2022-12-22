  function showDate(params){
    let out= document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString();
  }  
  window.addEventListener('load',showDate);

  function showDaysCount(params){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24 ;
    let result = document.getElementById('result');
    daysCount = Math.floor(daysCount);
    result.innerHTML = 'С даты рождения прошло: '+ daysCount;
  }
  function showTime() {
        let outTIME = document.getElementById('time');
        let currentTime = new Date();
        outTIME.innerHTML = currentTime.toLocaleTimeString('ru');
  }

  window.addEventListener('load', showTime);
  setInterval(showTime, 1000);
  
  
  function showNewDate(params) {
      let inputDate = document.querySelector('input[type=date]');
      let birthday = new Date(inputDate.value);
      
      
      let days = document.querySelector('input[type=number]').value;
  
      let NewDate = birthday.getTime() + days*24*60*60*1000;
      NewDate = new Date(NewDate);
     
      resdays.innerHTML = 'Круглая дата:  ' + NewDate;
  }