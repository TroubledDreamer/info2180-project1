/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(){


const input = document.getElementById("email");
const form = document.querySelector("form");
const message = document.querySelector(".message");



form.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = input.value.trim();


    if (email!= ""){
        message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    }
    else {
        message.textContent = `Please enter a valid email address.`;

    }



    });

});
