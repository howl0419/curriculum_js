let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
let Number = isEven(numbers);
function isEven(num) {
  for (var i = 0; i < num.length; i++) {
    if(num[i] % 2 === 0){
      console.log(num[i] + 'は偶数です');
    }
  }
}

class Car {
  constructor(gass,num) {
    this.gass = gass; 
    this.num = num;
}
  getNumGas()  {
    console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
  }
}
  let gassnum = new Car(50, 1000);
  gassnum.getNumGas();