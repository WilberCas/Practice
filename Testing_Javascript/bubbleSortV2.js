/*  Name: bubbleSort
    Purpose: sort the array using bubbleSort algorithm
*/
function bubbleSort(array) {
  while (true) {
    let finished = true;
    // Traversing through the array.
    array.forEach((item, index) => {
      let nextIndex = index + 1;
      let adjacent = array[nextIndex];
      if (array.includes(adjacent)) {
        if ( adjacent < item ) {
          array[index] = adjacent;
          array[nextIndex] = item;
          finished = false;
        }
      }
    });
    if(finished)
      return array;
  }
}

// Testing variables:
let arr = [6,5,3,1,8,7,2,4];
console.log(bubbleSort(arr));

let arr2 = [9, -3, 5, 0, 1, 50, 6, 4, 9 ,2 ,-3,-7,-8,-5,0,1,5,5,-8,3,42];
console.log(bubbleSort(arr2))
