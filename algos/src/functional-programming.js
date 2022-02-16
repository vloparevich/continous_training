const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.map(el => el * 2);

function mapForEach(arr, fn) {
    return fn(arr);
}

const mapping = (arr) => arr.map(el => el * 2);

console.log(mapForEach(arr1, mapping));

const mapForEach2 = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

console.log('Mapping 2 => ', mapForEach2(arr1, (el) => el % 2 === 0));

const checkPastLimit = (limiter, item) => {
    return item > limiter;
}

const delimeter = (limiter) => {
    return (item) => {
        return item > limiter;
    }
}

const delimeterViaBind = (limiter) => {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, 2)
}

const arr4 = mapForEach2(arr1, checkPastLimit.bind(this, 2));
console.log('arr4', arr4)

const arr5 = mapForEach2(arr1, delimeter(2));
console.log('via closure', arr5)

const arr6 = mapForEach2(arr1, delimeterViaBind(2));
console.log('via binding', arr6)

