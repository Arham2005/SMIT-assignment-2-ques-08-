const Car = {
  brand:"Suzuki",
  color:"white",
  price:10000
}
window.localStorage.setItem('car', JSON.stringify(Car));
let newCar = Car;
window.localStorage.getItem('newCar');