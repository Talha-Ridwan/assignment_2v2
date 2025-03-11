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

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function getRandomFontFamily() {
    const fontFamilyOptions = [
      "Arial", "Verdana", "Georgia", "Times New Roman", "Courier New", 
      "Comic Sans MS", "Tahoma", "Trebuchet MS", "Impact", "Lucida Console"
    ];
    return fontFamilyOptions[Math.floor(Math.random() * fontFamilyOptions.length)];
  }

  function setStyles(color) {
    fortunesDiv.style.backgroundColor = color;
    const borderColor = getRandomColor();
    fortunesDiv.style.border = `5px solid ${borderColor}`;
    const fontColor = getRandomColor();
    fortunesDiv.style.color = fontColor;
    fortunesDiv.style.fontFamily = getRandomFontFamily();
    fortunesDiv.style.fontSize = `${Math.floor(Math.random() * 2) + 1.5}em`;
    fortunesDiv.style.fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
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
