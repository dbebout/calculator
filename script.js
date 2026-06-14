const display = document.getElementById("display");

// Append numbers or operators to the display
function appendValue(input) {
  display.value += input;
}

// Clear the entire display screen
function clearDisplay() {
  display.value = "";
}

// Delete the last character entered
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the string expression securely
function calculate() {
  try {
    // Function evaluates the math string without using unsafe raw eval()
    display.value = Function(`"use strict"; return (${display.value})`)();
  } catch (error) {
    display.value = "Error";
  }
}
