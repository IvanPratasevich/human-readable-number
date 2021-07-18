module.exports = function toReadable (number) {
  let variable4 =  String(number).split("");
  let arrayTest2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const Numbers = {1: "one",2: "two",3: "three",4: "four",5: "five",
  6: "six",7: "seven",8: "eight",9: "nine",10: "ten",11: "eleven",
  12: "twelve",13: "thirteen",14: "fourteen",15: "fifteen",16: "sixteen",
  17: "seventeen",18: "eighteen",19: "nineteen",20: "twenty",30: "thirty",
  40: "forty",50: "fifty",60: "sixty",70: "seventy",80: "eighty",90: "ninety", 100: "one hundred"}

  function lessThanHundred(number){
    if (number === 0) {
      return "zero"
    }
   if (number == 100){
      return Numbers[number]
   }
    if (number < 20) {
      return Numbers[number];
    } else if (number < 100 && number >= 20){
        if (variable4[1] == 0){
          let result1 = Numbers[number];
          return result1;
        } else{
          let variable2 = parseInt(variable4[1]);
          let variable3 = parseInt(variable4[0] + "0");
          let result2 = Numbers[variable3] + " " +  Numbers[variable2];
          return result2;
        }
    }

  }
  if (number <= 100){
    return lessThanHundred(number)
  } else{
     let arrayTest1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     let variable55 = variable4[1] + variable4[2];
     let variable57 = variable4[1];
     let variable59 = variable4[2];
     if (variable57.includes(1) && variable59 == 0){

     }
     let variable56 = [10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20, 30, 40, 50, 60 , 70 , 80 , 90];
     if ( variable4[1] == 0 && variable4[2] == 1){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 2){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 3){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 4){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 5){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 6){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 7){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 8){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 9){
      return Numbers[variable4[0]] + " " + "hundred" + " " + Numbers[variable4[2]]
     }
     if ( variable4[1] == 0 && variable4[2] == 0){
      return Numbers[variable4[0]] + " " + "hundred"
     }
    if (variable55.includes(10) || variable55.includes(11) || variable55.includes(12) || variable55.includes(13)
      || variable55.includes(14) || variable55.includes(15) || variable55.includes(16) || variable55.includes(17)
      || variable55.includes(18) || variable55.includes(19) || variable55.includes(20) || variable55.includes(30)
      || variable55.includes(40) || variable55.includes(50) || variable55.includes(60) || variable55.includes(70) 
      || variable55.includes(80) || variable55.includes(90)){
      let variable2 = parseInt(variable4[2]);
      let variable3 = parseInt(variable4[1] + "0");
      let result2 = Numbers[variable55];
      let variable5 = parseInt(variable4[0]);
      let result8 = Numbers[variable5] + " " + "hundred" + " " + result2;
      return result8
    }
    else{
      let variable2 = parseInt(variable4[2]);
      let variable3 = parseInt(variable4[1] + "0");
      let result2 = Numbers[variable3] + " " +  Numbers[variable2];
      let variable5 = parseInt(variable4[0]);
      let result3 = Numbers[variable5] + " " + "hundred" + " " + result2;
      return result3 
    }
  }

}

  







