const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']

for (let item of arr) {
let delay = 100;
setTimeout(() => {
  process.stdout.write(item);
}, delay);
delay += 200;
}

