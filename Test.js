function optimizedTemp(arr, int) {
    let writeIndex = 0; // Index to write non-consecutive elements
  
    for (let i = 0; i < arr.length; i++) {
      const currentItem = arr[i];
      if (i === 0 || arr[i - 1] !== currentItem) {
        arr[writeIndex++] = currentItem; // Write only non-consecutive elements
      }
    }
  
    // Truncate the array to remove remaining elements after writeIndex
    arr.length = writeIndex;
    return arr;
  }
  
  const arr = [1, 1, 2, 2, 2, 1, 3, 1, 1];
  console.log(optimizedTemp(arr, 3)); // Output: [3, 1, 1]
  
  // Repeat for other test cases (arr2 and arr3)
  