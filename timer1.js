//receive cli input of numbers DONE
//store  these in an array DONE
//sort them in asc order DONE
//iterate through array
// will beep after this many second has passed from the last alarm
//sounds can be made using process.stdout.write('\x07');

const timer = (input) => {
  let arr = input.filter(item => {
    if (Number(item) >= 0) {
      return item;
    }
  });
  
  arr.sort().forEach(item => {
    setTimeout(() => {
      process.stdout.write('\x07');
    },item * 100);
  });
};

const input = process.argv.slice(2);
timer(input);