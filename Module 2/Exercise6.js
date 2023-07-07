
function getLargestNumber(n1,n2){

    return (n1>n2 && n1) || (n2 ?? n1);
}

console.log(getLargestNumber(10, 5))

