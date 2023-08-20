function checkOperator() {
     let inputFeild = document.getElementById("number");
     let result = document.getElementById("result");
     let number = inputFeild.value;

     if (number === "") {
          alert ("Please enter phone number");
     }
     else if (number.length !==11) {
          alert ("Invalid number");
     }
     else {
          switch (number[2]) {
               
               case "3": 
                    result.innerText = "Grameenphone";
                    break;
               case "4": 
                    result.innerText = "Banglalink";
                    break;
               case "5": 
                    result.innerText = "Teletalk";
                    break;
               case "6": 
                    result.innerText = "Airtel";
                    break;
               case "7": 
                    result.innerText = "Grameenphone";
                    break;
               case "8": 
                    result.innerText = "Robi";
                    break;
               case "9": 
                    result.innerText = "banglalink";
                    break;
               default: result.innerText = "Number Unknown";
                    break;
          }
     }

}