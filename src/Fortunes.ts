const fortunes: string[] = [
  "Conquer your fears or they will conquer you",
  "Rivers and sprins",
  "Don't fear what you do no know",
  "You will have a pleasant surprise",
  "Whenever possible, keep it super simple",
  "He who takes his work seriously stand infront of kings",
];

function getFortune() {
  const idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
}

export default getFortune;
