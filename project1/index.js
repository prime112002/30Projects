const inp = document.querySelector(".count");
const incbtn = document.querySelector(".res");
const decbtn = document.querySelector(".dec");
const rstbtn = document.querySelector(".reset");

let count = 0;
incbtn.addEventListener("click", () => {
  count = count + 1;
  inp.textContent = count;
});
decbtn.addEventListener("click", () => {
  if (count > 0) count = count - 1;
  inp.innerHTML = count;
});
rstbtn.addEventListener("click", () => {
  count = 0;
  inp.textContent = count;
});
