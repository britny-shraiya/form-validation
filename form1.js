function submit(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    if(username.length<4||username.trim()===''){
        alert("username should contain atleast 4 charcter and can't be empty")
        return false
    }
    else if(password.length<6||password.length>12||password.trim()===''){
        alert("password should contain 6 to 12 character and can't be empty")
        return false
    }
    document.getElementById('output').innerHTML ="username:" + username 
    document.getElementById('user').innerHTML = "password:" +password
   
}