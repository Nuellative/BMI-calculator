document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);
const bmi = urlParams.get("bmi");
//  console.log(bmi)
const resultDiv = document.querySelector(".bmi-result");


if (bmi !== null){
  const formattedBMI = parseFloat(bmi).toFixed(1);
  
  let message = `Your BMI is ${formattedBMI} <br>`;


  if(formattedBMI >=25){
 message += " and you are over weight";
}else if(formattedBMI > 29.9){
  message += " and you are obese" 
}else if(formattedBMI <18.5){
  message += " you are underweight"
} else{
  message += "you have a normal bmi"
}

resultDiv.innerHTML = message;
} else{
  resultDiv.textContent = "no BMI data available"
}
});