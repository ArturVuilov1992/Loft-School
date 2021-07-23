const mixedArray = [3,13,74,14,66,15,22,4];
const mixArray = [3,78,14,66,16,22,4];


const isEven = num => {
    return num % 2 === 0;

}

const filterArray = (arr, filterFn) => {
    const newArray = [];

    arr.forEach (num => { 
        if (filterFn(num)) {
            newArray.push(num);
        }
    })
      return newArray;
}


console.log(filterArray(mixArray, isEven));