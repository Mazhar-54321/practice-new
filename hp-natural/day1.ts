const [count, setCount] = useState(0);
const handleAdd = () => {
  setCount(count + 1);
  setCount(count + 1);
  // fix
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
};
// EXplanation:
// In React, state updates are asynchronous and may be batched for performance reasons.
// When you call setCount(count + 1), it doesn't immediately update the count variable.
// Instead, it schedules the update to happen later.
// Therefore, when you call setCount(count + 1) multiple times in a row, they all reference the same count value, which results in only one increment instead of two.
// To fix this issue, you can use the functional form of setState, which takes a function that receives the previous state as an argument.
// This way, each update will correctly reference the most recent state value, allowing for multiple increments to work as expected.
