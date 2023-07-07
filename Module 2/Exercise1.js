
function destructureExample() {
    const obj = { 
      name: 'John', 
      age: 30, 
      city: 'New York' 
    };
  
    const arr = [10, 20, 30, 40];
  
    const { name, age } = obj;
    const [a,,b] = arr;
  
    return { name, age };
  }
  
  const details = destructureExample();
  console.log(details);
  
  