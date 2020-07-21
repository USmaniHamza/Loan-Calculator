//part 2
//Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide Results
  document.getElementById("results").style.display = "none";

  //Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

//Calc Results
function calculateResults(e) {
  // console.log(e.target); //pura element diye dey
  //UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");
  const years = document.getElementById("years");
  //eguli shob oporer variable guli

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2); //fixed number of numbers after decimal
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    //Hide Results
    document.getElementById("results").style.display = "block";

    //Show loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

//Show error
function showError(error) {
  //Hide Results
  document.getElementById("results").style.display = "none";

  //Show loader
  document.getElementById("loading").style.display = "none";
  //create a div
  const errorDiv = document.createElement("div"); //<div></div>

  //Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Add a class
  errorDiv.className = "alert alert-danger";

  //Create text node and appened to div
  //inside in  the <div></div>
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading); //parent ke dhore korse

  //clear Error after 3 secs setTimeout from the window object
  setTimeout(clearError, 3000);
}
//Clear error function
function clearError() {
  document.querySelector(".alert").remove();
  //oi element ta ke remove kore dilo
}
