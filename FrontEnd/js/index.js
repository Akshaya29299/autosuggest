//alert("Hello From JS !");

console.log("Hello From JS !");
const btn = document.getElementById("toggleBtn");
const image = document.getElementById("userImage");
const name = document.getElementById("userName");
const gender = document.getElementById("userGender");

let isMale = true;

btn.addEventListener("click", () => {
    if (isMale) {
        image.src = "../images/jane.png"; // female image
        name.textContent = "Jane Doe";
        gender.textContent = "Female";
        btn.textContent = "Show Male";
    } else {
        image.src = "../images/john.png";
        name.textContent = "John Doe";
        gender.textContent = "Male";
        btn.textContent = "Show Female";
    }

    isMale = !isMale;
});