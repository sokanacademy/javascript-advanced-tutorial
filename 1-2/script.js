const a = 2;

process.stdin.resume();

process.stdin.on("read", () => {
  b = process.stdin.read();
  console.log('as');
  process.stdout.write(a + b);
});
process.exit();
