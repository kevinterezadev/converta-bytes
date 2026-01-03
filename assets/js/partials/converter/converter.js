/* ==============================
   CONVERSOR DE UNIDADES
   ============================== */

// Elementos DOM
const form = document.getElementById("conversor");

/* ==============================
   EVENTO DE SUBMISSÃO DO FORMULÁRIO
   ============================== */

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  // Obter valores do formulário
  const valueNumber = Number(document.getElementById("value").value);
  const unitOption = document.getElementById("unit").value;

  /* ==============================
     TABELA DE CONVERSÃO (bytes)
     ============================== */
  const units = {
    bit: 1 / 8,
    byte: 1,
    kb: 1024,
    mb: 1024 ** 2,
    gb: 1024 ** 3,
    tb: 1024 ** 4,
    pb: 1024 ** 5,
    eb: 1024 ** 6,
    zb: 1024 ** 7,
    yb: 1024 ** 8,
  };

  /* ==============================
     CÁLCULO DO VALOR EM BYTES
     ============================== */
  const valueInBytes = valueNumber * units[unitOption];

  /* ==============================
     ATUALIZAR TODAS AS CÉLULAS DA TABELA
     ============================== */
  Object.keys(units).forEach((key) => {
    const cell = document.querySelector(`[data-unit="${key}"]`);
    const result = valueInBytes / units[key];

    cell.textContent = formatResult(result);
  });

  /* ==============================
     FUNÇÃO DE FORMATAÇÃO DO RESULTADO
     ============================== */
  function formatResult(value) {
    let formatted = value.toLocaleString("pt-BR", {
      maximumFractionDigits: 6,
    });

    return formatted === "0" ? "~ 0" : formatted;
  }
});
