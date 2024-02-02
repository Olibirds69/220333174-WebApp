function createButton() {
    var button = document.createElement("button");

    button.innerHTML = "Click here";

    button.addEventListener("click",function() {
        alert("Boom! Panget ka!");
    });
    
    document.getElementById("buttonContainer").appendChild(button);
}
window.onload = function(){
    createButton();
}