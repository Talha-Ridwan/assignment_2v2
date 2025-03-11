const proverbs = [
  "A journey of a thousand miles begins with a single step.",
  "Actions speak louder than words.",
  "Better late than never.",
  "Birds of a feather flock together.",
  "Don't count your chickens before they hatch.",
  "Every cloud has a silver lining.",
  "A picture is worth a thousand words.",
  "You can lead a horse to water, but you can't make it drink.",
  "When in Rome, do as the Romans do.",
  "The early bird catches the worm."
];

function showProverb() {
  const randint = Math.floor(Math.random() * proverbs.length);
  const randProverb = proverbs[randint];
  const element = document.querySelector(".fortunes");
  element.innerText = randProverb;
}

document.addEventListener('DOMContentLoaded', () => {
  showProverb();

  const colorBoxes = document.querySelectorAll('.color-changer div');
  const fortunesDiv = document.querySelector('.fortunes');

  function setStyles(color) {
    fortunesDiv.style.backgroundColor = color;
    const borderColor = shadeColor(color, -20);
    fortunesDiv.style.border = `5px solid ${borderColor}`;
    

    const fontFamilyOptions = ["Arial", "Verdana", "Georgia", "Times New Roman"];
    const randomFont = fontFamilyOptions[Math.floor(Math.random() * fontFamilyOptions.length)];
    fortunesDiv.style.fontFamily = randomFont;
    fortunesDiv.style.fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
    fortunesDiv.style.fontSize = `${Math.floor(Math.random() * 2) + 1.2}em`;
  }

  function setRandomBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colorBoxes.length);
    const randomBox = colorBoxes[randomIndex];
    const randomColor = window.getComputedStyle(randomBox).backgroundColor;
    setStyles(randomColor);
  }

  colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const color = window.getComputedStyle(box).backgroundColor;
      setStyles(color);
    });
  });

  setRandomBackgroundColor();
});

function shadeColor(color, percent) {
  const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  let r = parseInt(rgb[1]);
  let g = parseInt(rgb[2]);
  let b = parseInt(rgb[3]);

  r = Math.round(r * (100 + percent) / 100);
  g = Math.round(g * (100 + percent) / 100);
  b = Math.round(b * (100 + percent) / 100);

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return `rgb(${r}, ${g}, ${b})`;
}
