//input: string of two numbers (range, correct password between)
//---> range: 146810-612564

//password is 6 digits
//password between min and max
//password must have at least one digit appear twice in a row (double)
//each digit must increment going left to right (ex. 156778)

let enigmaMachine = (range) => {
  range = range.split("-");
  let min = Number(range[0]);
  let max = Number(range[1]);
  let potentialPasswords = [];

  // let alanTuring = (currentPassword, hasDouble = false, highestDigit = 0) => {

  //   if (currentPassword.length <= 6) {
  //     if (hasDouble) {
  //       potentialPasswords.push(Number(currentPassword));
  //     }
  //     return;
  //   }
  //       // console.log(Number(range[0].slice(0, currentPassword.length)))

  //   if (Number(range[0].slice(0, currentPassword.length)) <= Number(currentPassword) || Number(range[1].slice(0, currentPassword.length)) >= Number(currentPassword))


  //   for (var i = highestDigit; i <= 9; i++) {
  //     if (currentPassword[currentPassword.length - 1] == i) {
  //       hasDouble = true;
  //     }

  //     currentPassword += i;
  //     alanTuring(currentPassword, hasDouble, highestDigit)
  //   }

  //   highestDigit++

  // }
  let hasDouble = (num) => {
    let double = false;
    num = String(num);
    console.log(num)
  }

  let isSorted = (num) => {
    return num === num.sort((a, b) => a - b)
  }



  while (min <= max) {
    if (hasDouble(min) && isSorted(min)) {
      potentialPasswords.push(min)
    }
    min++;

  }
  // console.log("range", range)
  // alanTuring(range[0][0]);
  // return potentialPasswords;

}

console.log(enigmaMachine("146810-612564"))
//current double = i

//for each digit 1 - 9(i)
  //loop through 5 options of numbers before/after i
    //recusion for 0 letters before double i and recursion 4 letters i-9
    //recusion for 1 letters before double i and recursion 3 letters i-9
    //recusion for 2 letters before double i and recursion 2 letters i-9
    //recusion for 3 letters before double i and recursion 1 letters i-9
    //recusion for 4 letters before double i and recursion 0 letters i-9