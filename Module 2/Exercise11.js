
function sortNumbers(...numbers){

    return numbers.sort((o, n) => o - n)
}

console.log(sortNumbers(...[5, 2, 8, 1, 4]))