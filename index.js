const first = document.querySelector("#first");
const second = document.querySelector("#second");
const button = document.querySelector("button");
let a = 0;
let b = 48;
first.addEventListener("change", (e) => {
  a = e.currentTarget.value;
});

second.addEventListener("change", (e) => {
  b = e.currentTarget.value;
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (a === b) {
    alert("Hiba: Azonos megállókat válaszott ki");
  } else {
    if (Number(a) > Number(b)) {
      console.log(Number(a) - Number(b));
    } else {
      console.log(Number(b) - Number(a));
    }
  }
});
