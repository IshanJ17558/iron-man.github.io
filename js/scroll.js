const paral = document.getElementById('hederSection');

window.addEventListner("scroll", function(){
  let offset = window.pageYoffset;
  paral.style.backgroundPositionY = offset* 0.3 +"px"
})
