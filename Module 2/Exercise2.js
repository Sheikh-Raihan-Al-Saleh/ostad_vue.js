
function sumNumbers(...numbers){
    return numbers.reduce((o,n)=> o+n)
}

const result=sumNumbers(1,2,3,4,5)
console.log(result)