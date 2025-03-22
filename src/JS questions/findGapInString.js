const f = "abcdrfe"; // Expected output: 2
const g = "uvwxgfery"; // Expected output: 4

function getNum(str) {
  let arr = str.split("");
  let ans = 1;
  let gap = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) === arr[i - 1].charCodeAt(0) + 1) {
      ans++;
    } else {
      gap.push(arr[i]);
      if (arr[i] == arr[ans - 1]) {
        break;
      }
    }
  }
  console.log(gap.length - 1);
}

getNum(f);
getNum(g);
