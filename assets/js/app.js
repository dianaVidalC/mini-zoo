var img= document.getElementsByClassName("animal");
var select= document.getElementById("select");
select.onchange = function(){
  if (select.value=="original") {
    for(var i=0;i<img.length;i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
    }
  }
  if (select.value=="sepia") {
    for(var j=0;j<img.length;j++){
      img[j].classList.add("sepia");
      img[j].classList.remove("blanco-negro");
      img[j].classList.remove("invertir-colores");
    }
  }
  if (select.value=="blanco-negro") {
    for(var n=0;n<img.length;n++){
      img[n].classList.add("blanco-negro");
      img[n].classList.remove("sepia");
      img[n].classList.remove("invertir-colores");
      }
  }
  if (select.value=="invertir-colores") {
    for(var l=0;l<img.length;l++){
      img[l].classList.add("invertir-colores");
      img[l].classList.remove("sepia");
      img[l].classList.remove("blanco-negro");
    }
  }
};
