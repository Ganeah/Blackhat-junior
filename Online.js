function send(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User name",user_name);
    window.location = "join.html";
}