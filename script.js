let height = document.querySelector(".height" );
let weight =document.querySelector(".weight")
const calculateBmiBtuuon = document.querySelector(".submit-button");




calculateBmiBtuuon.addEventListener('click', ()=>{
    let newHeight = Number(height.value);
    let newWieght = Number(weight.value);
    // console.log(newWieght);
    // console.log(newHeight);

    let heightSquare = Math.pow(newHeight ,2);
    // console.log(heightSquare)

    let bmi = newWieght/heightSquare;
    // p1.textContent = `Your bmi is ${bmi}`;

    window.location.href = `result.html?bmi=${bmi}`;
})
    
  
  
    
   
