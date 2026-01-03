const form = document.getElementById("conversor");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const valueNumber = Number(document.getElementById("value").value);
  const unitOption = document.getElementById("unit").value;
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
  const valueInBytes = valueNumber * units[unitOption];

  Object.keys(units).forEach((key) => {
    const cell = document.querySelector(`[data-unit="${key}"]`);
    const result = valueInBytes / units[key];

    cell.textContent = formatResult(result);
  });

  function formatResult(value) {
    let formatted = value.toLocaleString("pt-BR", {
      maximumFractionDigits: 6,
    });

    return formatted === "0" ? "~ 0" : formatted;
  }
});
