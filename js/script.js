// Jonathan Rene
// Techdegree - Project 3
// Javascript Code
// 10/31/2021

// This automatically focuses on the name field when the page first loads. 
document.getElementById("name").focus();

// This automatically makes the "other job role" text field hidden when the page first loads. 
document.getElementById("other-job-role").style.display = 'none';

// This detects if the user has selected "other" for his or her job role.
// If so, the "other job role" text field becomes visible
document.getElementById("title").addEventListener('change', (e) => {
    if (e.target.value === "other") {
        document.getElementById("other-job-role").style.display = 'block';
    } else{
        document.getElementById("other-job-role").style.display = 'none';
    }
})

// This automatically disables the t-shirt color selection element when the page first loads.
document.getElementById("color").disabled = true;

// This detects for change in the design selection method
let design = document.getElementById("design");
design.addEventListener('change', (e) => {
    // Enables t-shirt color selection method
    document.getElementById("color").disabled = false;

    // Sets color choice back to default (I created this default)
    document.getElementById('color').value = "Select T-shirt Color";

    // This determines which color options to be shown for t-shirt color based on design user selects. 
    // This shows color options if user selects I "heart" JS Puns
    if (design.value === "js puns"){
        let colors = document.getElementById('color').children;
        for(let i=0; i < colors.length; i++){
            if (colors[i].value === "cornflowerblue" || colors[i].value === "darkslategrey" || colors[i].value === "gold"){
                colors[i].hidden = false;
            }
            else{
                colors[i].hidden = true;
            }
        }
    // This shows color options if user selects I "heart" JS. 
    } else{
        let colors = document.getElementById('color').children;
        for(let i=0; i < colors.length; i++){
            if (colors[i].value === "tomato" || colors[i].value === "steelblue" || colors[i].value === "dimgrey"){
                colors[i].hidden = false;
            }
            else{
                colors[i].hidden = true;
            }
        }
    }
})

 // creates a list of references to all activity labels.
let activitiesLabels = document.getElementById('activities-box').getElementsByTagName('label');

// This is used to keep track of total cost for all acitivities. 
let total_cost = 0;

// Adds event listeners to all activity labels. Listens for clicks. (Indicates user has chosen this activity)
for (let i=0; i < activitiesLabels.length; i++){
    activitiesLabels[i].addEventListener('click', (e)=>{
        e.preventDefault(); // prevents default actions of clicking on label or any elements in label
        let checkbox = activitiesLabels[i].getElementsByTagName('input')[0]; // creates reference to input box in activity label
        
        // Checks if activity has been previously selected. If so, the activity will be deselected, and total cost will update. 
        if(checkbox.checked === true){
            checkbox.checked = false;
            total_cost -= parseInt(checkbox.getAttribute('data-cost'));
            document.getElementById("activities-cost").innerHTML = `Total: $${total_cost}`;
        } else{
            checkbox.checked = true;
            total_cost += parseInt(checkbox.getAttribute('data-cost'));
            document.getElementById("activities-cost").innerHTML = `Total: $${total_cost}`;
        }
    })
}

// This makes the credit card payment option the default payment option when the page first loads. 
let payment = document.getElementById('payment');
payment.value = "credit-card";

// This hides Paypal and Bitcoin payment options when the page first loads.
document.getElementById("paypal").style.display = 'none';
document.getElementById("bitcoin").style.display = 'none';

// This detects if the user has changed payment method and displays corresponding payment method details
document.getElementById('payment').addEventListener('change', (e) => {
    console.log(e.target);
    if (e.target.value === "credit-card"){
        document.getElementById('credit-card').style.display = 'block';
        document.getElementById('paypal').style.display = 'none';
        document.getElementById('bitcoin').style.display = 'none';
    } else if (e.target.value === "paypal") {
        document.getElementById('credit-card').style.display = 'none';
        document.getElementById('paypal').style.display = 'block';
        document.getElementById('bitcoin').style.display = 'none';
    } else{
        document.getElementById('credit-card').style.display = 'none';
        document.getElementById('paypal').style.display = 'none';
        document.getElementById('bitcoin').style.display = 'block';
    }
})