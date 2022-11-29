function setRussian() {
  let name = document.getElementById("student");
  name.innerHTML = "Всеволод Шениязов, Егор Коломеец";

  let footer = document.getElementById("footer");
  footer.innerHTML = "Факультет бизнеса, ФБИ-03, 3 курс, 2022";

  document.getElementById("your-name").innerHTML = "Ваше имя";
  document.getElementById("input-name").placeholder = "Введите имя";
  document.getElementById("your-surname").innerHTML = "Ваша фамилия";
  document.getElementById("input-surname").placeholder = "Введите вашу фамилию";
  document.getElementById("your-age").innerHTML = "Ваш возраст";
  document.getElementById("input-age").placeholder = "Введите ваш возраст";
  document.getElementById("OK-button").value = "Кнопка ОК";
  document.getElementById("RESET-button").value = "Кнопка СБРОС";
}

function setEnglish() {
  let name = document.getElementById("student");
  name.innerHTML = "Vsevolod Sheniyazow, Egor Kolomeets";

  let footer = document.getElementById("footer");
  footer.innerHTML = "Faculty of Business, FBI-03, 3rd year, 2022";

  document.getElementById("your-name").innerHTML = "Your name";
  document.getElementById("input-name").placeholder = "Enter your name";
  document.getElementById("your-surname").innerHTML = "Your surname";
  document.getElementById("input-surname").placeholder = "Enter your surname";
  document.getElementById("your-age").innerHTML = "Your age";
  document.getElementById("input-age").placeholder = "Enter your age";
  document.getElementById("OK-button").value = "OK button";
  document.getElementById("RESET-button").value = "Reset button";
}

function showAlert() {
  let userName = document.getElementById("input-name").value;
  let userSurname = document.getElementById("input-surname").value;
  let userAge = document.getElementById("input-age").value;
  alert(
    "Привет, " + userName + " " + userSurname + "\n" + "Ваш возраст: " + userAge
  );
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let color = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("user-data").style.backgroundColor = color;
}

function showAlert1() {
  alert("Хохма");
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let color = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("footer").style.backgroundColor = color;
}

function showAlert2() {
  alert("лучшие студенты в мире!!!");
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let color = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("footer").style.backgroundColor = color;
}
