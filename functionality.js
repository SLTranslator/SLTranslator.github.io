//Translate Page Functions
function showType(){document.getElementById("Type").style.display = "";}
function showRecord(){document.getElementById("Record").style.display = "";}
function showTranslation(){document.getElementById("Output").style.display = "";}

function showRecord(){
    var x = document.getElementById("Record");
    var y = document.getElementById("Type")
    var z = document.getElementById("Output")
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
    }
}
function showType(){
    var x = document.getElementById("Type");
    var y = document.getElementById("Record")
    var z = document.getElementById("Output")
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
      z.style.display = "none";
    }
}
function hideTranslation(){
    var x = document.getElementById("Record");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


