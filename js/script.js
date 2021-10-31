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

// This automatically disables the t-shirt color selection element
// when the page first loads.
document.getElementById("color").setAttribute('disabled', true);

