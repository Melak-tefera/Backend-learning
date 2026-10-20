const scores = [
  [80, 90, 75],
  [60, 85, 95],
  [70, 88, 92]
];
let tt=0;

for (let row = 0; row < scores.length; row++) {
  for (let column = 0; column < scores[row].length; column++) {
    console.log(scores[row][column]);
    tt += scores[row][column];
    console.log(tt);

  }
}