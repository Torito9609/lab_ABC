function random_Color() {
  const colors = ["yellow", "blue", "red"];
  random_index = Math.floor(Math.random() * colors.length);
  return colors[random_index];
}
