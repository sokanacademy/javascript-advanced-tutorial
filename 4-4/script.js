function makeCounter() {
  let sum = 0;
  const add = () => {
    sum += 1;
    console.log(sum);
  };
  return add;
}

const add = makeCounter();
