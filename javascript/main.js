var clickme = document.getElementById('clickme');
var clear = document.getElementById('clear');

clickme.addEventListener('click', function() {
  document.getElementById("helloworldcontainer").innerHTML = "HELLO WORLD!";
  document.getElementById("clickme").style.display = "none";
  document.getElementById("clear").style.display = "block";
});

clear.addEventListener('click', function() {
  document.getElementById("helloworldcontainer").innerHTML = "";
  document.getElementById("clickme").style.display = "block";
  document.getElementById("clear").style.display = "none";
});
