setInterval(CapNhat,1000);
function CapNhat(){
    const d = new Date();
  document.getElementById("dongHo").innerHTML = d.toLocaleTimeString();
}