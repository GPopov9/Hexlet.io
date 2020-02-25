// BEGIN (write your solution here)
const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const result = [];
  for (const item of arr1) {
    if (arr2.includes(item)) result.push(item);
  }
  return result;
};

export default getIntersectionOfSortedArrays;
// END

// BEGIN Tutor
const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const size1 = arr1.length;
  const size2 = arr2.length;

  let i1 = 0;
  let i2 = 0;
  const result = [];

  while (i1 < size1 && i2 < size2) {
    if (arr1[i1] === arr2[i2]) {
      result.push(arr1[i1]);
      i1 += 1;
      i2 += 1;
    } else if (arr1[i1] > arr2[i2]) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }

  return result;
};

export default getIntersectionOfSortedArrays;
// END