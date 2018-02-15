let arr = [6,5,3,1,8,7,2,4];

function bubbleSort(array) {

  // Variables to hold the data. As well a boolean to tell when the
  // program is done doing the while loop.
  let finished = false;

  while (!finished){
    let counterOfSteps =0;
    // Traversing through the array.
    array.forEach((item, index) => {
      // Creating a variable to hold the value passed the element.
      let adjacent = array[index + 1];

      // Checking if the element is present on the array.
      if ( array.includes(adjacent) ){

        if ( adjacent > item ){
          array[index] = adjacent;
          array[index + 1 ] = item;
          counterOfSteps++;
        }

      }
      else{
        if(counterOfSteps == 0) {
          finished = true;
        }
      }
    });

  }
    return array;
}

console.log(bubbleSort(arr));
