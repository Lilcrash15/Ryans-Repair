//index.js
function sendEmail() {

    var contact=document.getElementById("contact").value;
    var name=document.getElementById("name").value;
    var useremail=document.getElementById("useremail").value;

    Email.send({
        Host: "smtp.gmail.com",
        Username : "rrepairoh@gmail.com",
        Password : "TCLCHAR112294",
        To : 'lilcrash19@gmail.com',
        From : useremail,
        Subject : name,
        Body : contact,
    }).then(
        message => alert("Sent successfully")
    )
}