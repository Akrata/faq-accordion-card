var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.style.fontWeight = "700";
    this.style.color = "black";
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.fontWeight = "400";
      this.style.color = "#505156";
    } else {
      panel.style.display = "block";
      
      
    }
  });
}