let btn = document.getElementsByTagName("button")[0];
let btnClear = document.getElementsByTagName("button")[1];
let rowLength = document.querySelectorAll("tbody tr").length;
let errorMsg = document.getElementsByTagName("table")[0];
let parsedData = [];
let result = true;
function check(e) {
  result = true;
  parsedData = [];
  let table = Array.from(
    document.querySelectorAll(".body > tr > td >input")
  ).map((e) => e.value);

  for (let i = 0; i < rowLength; i++) {
    parsedData.push([...table.slice(i * rowLength, (i + 1) * rowLength)]);
  }

  for (let i = 0; i < rowLength; i++) {
    result = result ? new Set(parsedData[i]).size === rowLength : false;
  }

  for (let k = 0; k < parsedData.length; k++) {
    let temp = [];
    for (let j = 0; j < parsedData.length; j++) {
      temp.push(parsedData[j][k]);
      console.log(parsedData[j][k])
      console.log(temp)
    }

    result = result ? new Set(temp).size === rowLength : false;
  }

  if (result === false) {
    errorMsg.classList.add("error");
    let div = document.createElement("div");
    div.innerText = "NOP! You are not done yet";

    errorMsg.insertAdjacentElement("afterend", div);
    div.classList.add("msg");
  } else {
    alert("You solve it");
  }
}
function clear(e) {
  result = true;
  parsedData = [];
  let input = document.querySelectorAll(".body > tr > td >input");
  let divMsg = document.querySelector(".msg");
  input.forEach((el) => {
    el.value = "";
  });
  errorMsg.classList.remove("error");

  if (!divMsg) {
    return;
  }
  divMsg.remove();
}
btn.addEventListener("click", check);
btnClear.addEventListener("click", clear);
