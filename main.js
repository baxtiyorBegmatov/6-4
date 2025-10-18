let count = 0;

const countEl = document.getElementById("count");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const inputNumber = document.getElementById("inputNumber");
const sendBtn = document.getElementById("sendBtn");
const colorPicker = document.getElementById("colorPicker");

minusBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

plusBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

sendBtn.addEventListener("click", () => {
  const val = parseInt(inputNumber.value);
  if (!isNaN(val)) {
    count = val;
    updateDisplay();
  }
});

colorPicker.addEventListener("input", () => {
  countEl.style.color = colorPicker.value;
});

function updateDisplay() {
  countEl.textContent = count;
}
