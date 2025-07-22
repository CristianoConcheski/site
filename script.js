const c = document.getElementById("matrix");
const ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

const matrix =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";

const font_size = 10;
const columns = c.width / font_size;

const drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#0f0";
  ctx.font = font_size + "px arial";

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];

    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 35);

function validarEmail() {
  const email = document.querySelector("#email");
  const error = document.querySelector("#error-email");

  if (!email.checkValidity()) {
    error.innerHTML = "Email inválido";
  }
}

function redefinirMsg() {
  const error = document.querySelector("#error-email");
  if (error.innerHTML == "Email inválido") {
    error.innerHTML == "";
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const controls = document.querySelectorAll(".control");
let currentitem = 0;
const items = document.querySelectorAll(".item");
const maxitems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", function () {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentitem -= 1;
    } else {
      currentitem += 1;
    }

    if (currentitem >= maxitems) {
      currentitem = 0;
    }

    if (currentitem < 0) {
      currentitem = maxitems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentitem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items[currentitem].classList.add("current-item");
  });
});
