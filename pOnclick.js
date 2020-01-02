// This Js file is linked with pOnclick.html

// Practce 2 
// function changeText(id){
//     id.innerHTML='Oppss!'
// }

// Practce 3
// function clickDate(id){
//     id.innerHTML = Date();
// }

// Practice 4
// Find date using method ID
// function checkDate(){
//     document.getElementById("demo").innerHTML= Date();
// }

// Practice 5
// document.getElementById("checkDate").onclick = displayDate;  //Check it or more time its little bit hard hai.

// function displayDate(){
//     document.getElementById("demo").innerHTML = Date();
// }

// Practice 6
function checkCookies(){
    var text="";
    if (navigator.cookieEnabled === true){
        text="cookies enabled."
    } else {
        text="cookies are not enabaled."
    }
    document.getElementById("demo").innerHTML= text;
}



