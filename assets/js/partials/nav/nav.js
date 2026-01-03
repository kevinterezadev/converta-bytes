/* ==============================
   NAVEGAÇÃO RESPONSIVA
   ============================== */

// Elementos DOM
const hamburguer = document.getElementById("hamburguer");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".header__link");

/* ==============================
   TOGGLE DO MENU HAMBÚRGUER
   ============================== */

hamburguer.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburguer.classList.toggle("active");
});

/* ==============================
   FECHAR MENU AO CLICAR EM LINK
   ============================== */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navList.classList.remove("active");
  });
});
