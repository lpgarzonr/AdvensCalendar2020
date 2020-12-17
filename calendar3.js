var fs = require("fs");

function countTrees(right, down) {
  const maze = buildMaze(right);
  const lastRow = maze.length;
  let counter = 0;
  let i = 0;
  let j = 0;
  while (i < lastRow) {
    if (maze[i][j] === "#") {
      counter++;
    }
    i = i + down;
    j = j + right;
  }
  return counter;
}

// async function countTreesInPath(maze, i, j, lastRow, right, down, counter) {}
function buildMaze(horizontalStep) {
  const maze = [];
  const lines = fs.readFileSync("calendar3-input.txt").toString().split("\n");
  const mazeWidth = horizontalStep * lines.length + 1;
  const lineSize = lines[0].length;
  const numOfRep = Math.ceil(mazeWidth / lineSize);

  for (let i = 0; i < lines.length - 1; i++) {
    const arrayLine = lines[i].split("");
    const mazeLine = [].concat(...new Array(numOfRep).fill(arrayLine));
    maze.push(mazeLine);
  }
  return maze;
}
const res1 = countTrees(1, 1);
const res2 = countTrees(3, 1);
const res3 = countTrees(5, 1);
const res4 = countTrees(7, 1);
const res5 = countTrees(1, 2);
console.log(res1 * res2 * res3 * res4 * res5);
