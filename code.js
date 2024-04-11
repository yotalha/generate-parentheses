const n = 3;
const stack = [];
const res = [];

function backtrack(openN, closedN) {
  if (openN == closedN && openN == n) {
    console.log("I was here with stack ", stack);
    res.push(stack.join(""));
    console.log("res append ", res);
    return;
  }

  if (openN < n) {
    stack.push("(");
    backtrack(openN + 1, closedN);
    stack.pop();
  }
  if (closedN < openN) {
    stack.push(")");
    backtrack(openN, closedN + 1);
    stack.pop();
  }
}
backtrack(0, 0);
console.log("res ", res);
