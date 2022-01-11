const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // move the umber to the first position in the array
      array.unshift(array.splice(i,1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j-1] && array[i] < array[j]) {
          // move number to the right spot in the array
          array.splice(j,0,array.splice(i,1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);