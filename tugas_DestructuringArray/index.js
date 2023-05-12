//Destructuring Array
// Data siswa
const students = ['John', 'Jane', 'Mike', 'Sarah', 'David'];

// Destructuring array
const [student1, student2, student3, student4, student5] = students;

console.log(student1); // Output: John
console.log(student2); // Output: Jane
console.log(student3); // Output: Mike
console.log(student4); // Output: Sarah
console.log(student5); // Output: David
//Destructuring Object
// Data produk
const product = {
    name: 'Laptop',
    price: 1500,
    brand: 'HP',
    color: 'Silver',
    model: 'XYZ123'
  };
  
  // Destructuring object
  const { name, price, brand, color, model } = product;
  
  console.log(name);  // Output: Laptop
  console.log(price); // Output: 1500
  console.log(brand); // Output: HP
  console.log(color); // Output: Silver
  console.log(model); // Output: XYZ123

  