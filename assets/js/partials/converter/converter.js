const converterForm = document.getElementById("conversor");
const equivalenceTitleData = document.getElementById(
  "equivalence__title--data",
);

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = Number(document.getElementById("value").value);
  const selectedUnit = document.getElementById("unit").value;

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

  const totalInBytes = inputValue * units[selectedUnit];

  Object.keys(units).forEach((key) => {
    const cell = document.querySelector(`[data-unit="${key}"]`);
    if (cell) {
      const conversionResult = totalInBytes / units[key];
      cell.textContent = formatTechnicalResult(conversionResult);
    }
  });

  const totalInMB = totalInBytes / units.mb;

  const equivalents = {
    photos: Math.floor(totalInMB / 2.5),
    songs: Math.floor(totalInMB / 5),
    videos: Math.floor(totalInMB / 60),
  };

  Object.keys(equivalents).forEach((key) => {
    const element = document.querySelector(`[data-equiv="${key}"]`);
    if (element) {
      element.textContent = formatHumanReadable(equivalents[key]);

      element.style.color = "var(--secondary-color)";
      setTimeout(() => {
        element.style.color = "#fff";
      }, 500);
    }
  });

  equivalenceTitleData.textContent = `${inputValue} ${selectedUnit.toUpperCase()}`;
});

function formatTechnicalResult(value) {
  if (value === 0) return "0";

  const absValue = Math.abs(value);

  if (absValue >= 1e15 || (absValue < 0.0001 && absValue > 0)) {
    return value
      .toExponential(2)
      .replace("e-", " x 10^-")
      .replace("e+", " x 10^");
  }

  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: 4,
    minimumFractionDigits: 0,
  });
}

function formatHumanReadable(value) {
  if (value >= 1e12) return (value / 1e12).toFixed(1) + " Tri";
  if (value >= 1e9) return (value / 1e9).toFixed(1) + " Bi";
  if (value >= 1e6) return (value / 1e6).toFixed(1) + " Mi";

  return value.toLocaleString("pt-BR");
}
