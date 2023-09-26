document.getElementById("oke").innerHTML = "Hello";
document.getElementById("input").style.display = 'none'
function onClick(){
    document.getElementById("input").style.display = 'block'
}
function onChange(){
    let text = document.getElementById("input").value;
    document.getElementById("oke").innerHTML = text;
}
