var users = [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "/images/john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "/images/jane.png"
    }
]

var curId = 0;

function toggle(){
    //toggle curId from 0 -> 1 and 1 -> 0
    curId = (curId + 1) % 2;

    //toggle the rendered user details

    var user = users[curId];
    document.getElementById("user-Image").src = user.image;

    document.getElementById("user-Name").innerText = user.name;

    document.getElementById("user-Gender").innerText = user.gender;
    
}
