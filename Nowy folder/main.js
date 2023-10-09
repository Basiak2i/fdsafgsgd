const dzialanie = document.querySelector("#dzialanie");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const button = document.querySelector("#liczenie");
const wynik = document.querySelector("#wynik");

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  let num1_w = parseInt(num1.value);
  let num2_w = parseInt(num2.value);

  if (dzialanie.value == "+") {
    wynik.innerHTML = `${num1_w} ${dzialanie.value} ${num2_w} = ${
      num1_w + num2_w
    } `;
  } else if (dzialanie.value == "-") {
    wynik.innerHTML = `${num1_w} ${dzialanie.value} ${num2_w} = ${
      num1_w - num2_w
    } `;
  } else if (dzialanie.value == "*") {
    wynik.innerHTML = `${num1_w} ${dzialanie.value} ${num2_w} = ${
      num1_w * num2_w
    } `;
  } else if (dzialanie.value == "/") {
    wynik.innerHTML = `${num1_w} ${dzialanie.value} ${num2_w} = ${
      num1_w / num2_w
    } `;
  }
});
