// index.js
function sendEmail(){

    var email=document.getElementById("contact").value;

    Email.send({
    Host : "smtp.gmail.com",
    Username : "rrepairoh@gmail.com",
    Password : "Charrmllil112294",
    To : "Lilcrash19@gmail.com",
    From : "rrepairoh@gmail.com",
    Body : email,
    }).then(
        message => alert("Successfully Sent!")
    )

    
}