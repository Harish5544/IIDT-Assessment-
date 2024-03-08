var isInitialColor = true;

function changeBackgroundColor() {
    var randomColor;
    
    if (isInitialColor) {
        randomColor = "#F1f5f8";
        isInitialColor = false;
    } else {
        randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    
    
    document.body.style.backgroundColor = randomColor;
    document.getElementById("colorCode").innerText = randomColor;
}
