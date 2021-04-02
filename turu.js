function add_User(){
    username=document.getElementById("text").value;
    localStorage.setItem("user",username);
    window.location="turu_room.html"
}