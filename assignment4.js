// problem 1

function calculateTax(income, expenses) {
    if ( income < expenses || income < 0 || expenses < 0 || typeof income !== "number" || typeof expenses !== "number")
    {
        return "Invalid Input";
    } 
  else
    {
      return (income - expenses) * 0.2;
    }
}

// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));

// problem 2

function sendNotification(email) {
  if (typeof email !== "string" || !email.includes("@")) 
  {
    return "Invalid Email";
  }

  const indexOfCenter = email.indexOf("@");
  const userName = email.slice(0, indexOfCenter);
  const domainName = email.slice(indexOfCenter + 1, email.length);

  return userName + " sent you an email from " + domainName;
}
// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));
// console.log(sendNotification(1111111111));

// Problem 3
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let ans = false;
  for (const char of name) {
    if (digits.includes(char)) {
      ans = true;
    }
  }
  return ans;
}
// console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["raj"]));

// problem 4
function calculateFinalScore(obj) {
      if(typeof obj !== 'object' || typeof obj.name !== "string" || typeof obj.testScore !== "number" || typeof obj.schoolGrade !== "number" || typeof obj.isFFamily !== "boolean" )
      {
        return "Invalid Input";
      }

      let fullMark = 0;
      if(obj.testScore <= 50 && obj.schoolGrade <= 30)
      {
        if(obj.isFFamily)
          {
            fullMark = 20 + obj.testScore + obj.schoolGrade;
          }
          else
          {
            fullMark = obj.testScore + obj.schoolGrade;
          }
      }
      else
      {
        return false;
      }

      return fullMark >= 80 ? true : false;
}

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
// console.log(calculateFinalScore("hello" ));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } ));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 49,  schoolGrade: 30, isFFamily : false  } ));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 99,  schoolGrade: 90, isFFamily : true  } ));


// problem 5
function  waitingTime(waitingTimes  , serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number")
  {
    return "Invalid Input";
  }

  let sum = 0;
  for(const time of waitingTimes)
  {
    sum += time;
  }
  let average = Math.round(sum / waitingTimes.length); 
  let mySerial = serialNumber - waitingTimes.length - 1;

  return average * mySerial;
}


// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime([6], 4));
// console.log(waitingTime(7 , 10));
// console.log(waitingTime("[6,2]", 9));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));

