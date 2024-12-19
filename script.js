function random_Color() {
  const colors = ["green", "blue", "red"];
  random_index = Math.floor(Math.random() * colors.length);
  return colors[random_index];
}

function change_Color(element) {
  const random_color = random_Color();
  element.style.color = random_color;
}
