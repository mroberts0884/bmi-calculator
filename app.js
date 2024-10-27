function calculateBMI() {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;

    let bmiForm = 703 * (weight) / (height * height);

    let result = document.getElementById("result");
    result.textContent = "Your BMI is " + bmiForm.toFixed(2);

    if(bmiForm < 18.5) {
        result.textContent = "Your BMI is " + bmiForm.toFixed(2) + ` and your nutritional status is underweight.`;
     
    }
    else if(bmiForm >= 18.5 && bmiForm <= 24.9) {
        result.textContent = "Your BMI is " + bmiForm.toFixed(2) + ` and your nutritional status is normal weight.`;  
    }
    else if(bmiForm >= 25.0) {
        result.textContent = "Your BMI is " + bmiForm.toFixed(2) + ` and your nutritional status is overweight.`;
    }
    else {
        result.textContent = "Both inputs are required."
    }
}

