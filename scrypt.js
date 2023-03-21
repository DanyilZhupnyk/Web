const reserveButtons = document.querySelectorAll('.reserve');

reserveButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.innerText = "Зарезервовано";
    button.style.backgroundColor = "red";
  })})
