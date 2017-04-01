var img= document.getElementsByClassName("animal");
var select= document.getElementById("select");
select.onchange = function(){
  function animalColors(color){
      for(var i=0;i<img.length;i++){
        img[i].classList.remove("blanco-negro");
        img[i].classList.remove("invertir-colores");
        img[i].classList.remove("sepia");
        img[i].classList.add(color);
      }
  }
      if (select.value=="original") {
        animalColors("original");
      }
      if (select.value=="sepia") {
        animalColors("sepia");
      }
      if (select.value=="blanco-negro") {
        animalColors("blanco-negro");
      }
      if (select.value=="invertir-colores") {
        animalColors("invertir-colores");
      }
};
