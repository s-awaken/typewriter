const sentence = "hello there from lighthouse labs";
let count = 0;
for (const char of sentence) {
  setTimeout(() => {
    console.log(`${char} \n`);
  }, count);
  count += 50;
}