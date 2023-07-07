
const address = { street: '123 Main St', country: 'USA' };

function getAddressCity(address){

    return address?.city||'unknown'

}
console.log(getAddressCity(address)); 
