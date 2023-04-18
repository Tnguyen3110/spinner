const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let delay = 100;
for (let item of arr) {
setTimeout(() => {
  process.stdout.write(item);
}, delay);
delay += 200;
}

