function showCustomMenu(sign, x, y) {
  const cm = document.getElementById("custommenu");
  if (sign) {
    cm.style.visibility = 'visible';
    cm.style.left = x + "px";
    cm.style.top = y + "px";
  } else {
    cm.style.visibility = 'hidden';
  }
}

function doAction(actionType) {
  const bodyStyle = document.body.style;

  switch (actionType) {
    case "copy":
      navigator.clipboard.writeText(document.body.innerText);
      break;

    case "close":
      window.close();
      break;

    case "fontIncrease":
      adjustFontSize(2); // збільшити на 2px
      break;

    case "fontDecrease":
      adjustFontSize(-2); // зменшити на 2px
      break;

    case "changeBkg":
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      bodyStyle.backgroundColor = randomColor;
      break;
  }
}

// Допоміжна функція для зміни розміру шрифту на ±2px
function adjustFontSize(delta) {
  const currentSize = window.getComputedStyle(document.body).fontSize;
  const currentPx = parseFloat(currentSize);
  const newSize = currentPx + delta;
  document.body.style.fontSize = newSize + "px";
}
