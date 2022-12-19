document.getElementById("bl").style.backgroundColor = "#eb3448";

function toDark() {
  document.documentElement.setAttribute("data-theme", "dark");
  document.getElementById("bl").style.backgroundColor = "#eb3448";
  document.getElementById("bs").style.backgroundColor = "white";
  localStorage.setItem("theme", "dark");
}

function toLight() {
  document.documentElement.setAttribute("data-theme", "light");
  document.getElementById("bs").style.backgroundColor = "#eb3448";
  document.getElementById("bl").style.backgroundColor = "white";
  localStorage.setItem("theme", "light");
}
