function formvalid(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if(name == "" || email == "" || subject == "" || message == ""){
        alert("Please fill all the fields");
        return false;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully.");
    return true;
}