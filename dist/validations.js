let validZipcode = new Array("00000", "99999", "88888");
let next = document.getElementById("next");
let zipcodeInput = document.getElementById("zipcode");
var notServiced = document.getElementById("not-serviced");
var zipPopUp = document.getElementById("zip-pop-up");

let validMake = new Array("Airstream","Ares");
let makeInput = document.getElementById("Vehicle-Make");
var noMake = document.getElementById("no-make");
var makePopUp = document.getElementById("make-pop-up");

next.addEventListener("click", function()
{

if(document.getElementById("zipcode").value.length != 0) {
    if (validZipcode.includes(zipcodeInput.value))
        true; 
    else{
        alert('Auto Rescue Solutions does not service your location.');
        document.getElementById('zipcode').style.borderColor = "red"; 
        notServiced.style.display = "block";
        zipPopUp.style.display = "flex";
				return;
        }
        };
        

if(document.getElementById("Vehicle-Make").value.length != 0) {
    if (validMake.includes(makeInput.value))
        alert('Auto Rescue Solutions does not service vehicle.');
        document.getElementById('Vehicle-Make').style.borderColor = "red"; 
        noMake.style.display = "block";
        makePopUp.style.display = "flex";
				return;  
        };
        


}
);
