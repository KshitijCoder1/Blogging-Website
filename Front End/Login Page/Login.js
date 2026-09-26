function formvalid(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(user == "" || pass == ""){
        alert("Please fill all the fields");
        return false;
    }
    
    return true;
}