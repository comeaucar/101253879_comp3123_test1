const lowerCaseWords = (arr) =>{
    return new Promise((resolve, reject) => {
        let filteredArr = arr.filter(x => typeof(x) === 'string' && !Number(x))
        let mapArr = filteredArr.map(y => y.toLowerCase())
        resolve(mapArr);
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray).then((res) => console.log(res)).catch((error) => console.log(error))