function setRussian() {
  let name = document.getElementById("student");
  name.innerHTML = "Всеволод Шениязов, Егор Коломеец";

  let footer = document.getElementById("footer");
  footer.innerHTML = "Факультет бизнеса, ФБИ-03, 3 курс, 2022";

  document.getElementById("your-name").innerHTML = "Ваше имя";
  document.getElementById("input-name").placeholder = "Введите имя";
  document.getElementById("your-surname").innerHTML = "Ваша фамилия";
  document.getElementById("your-age").placeholder = "Введите ваш возраст";
  document.getElementById("OK-button").value = "Кнопка ОК";
  document.getElementById("Reset-button").value = "Кнопка СБРОС";
}

function setEnglish() {
  let name = document.getElementById("student");
  name.innerHTML = "Всеволод Шениязов, Егор Коломеец";

  let footer = document.getElementById("footer");
  footer.innerHTML = "Faculty of Business, FBI-03, 3rd year, 2022";

  document.getElementById("your-name").innerHTML = "Your name";
  document.getElementById("input-name").placeholder = "Enter your name";
  document.getElementById("your-surname").innerHTML = "Your surname";
  document.getElementById("your-age").placeholder = "Enter your age";
  document.getElementById("OK-button").value = "OK button";
  document.getElementById("Reset-button").value = "Reset button";
}
