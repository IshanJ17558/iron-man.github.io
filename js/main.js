const parallax = document.getElementById
("hederSection");
window.addEventListener("scroll", function ()
{
  let offset = window.pageYoffset;
  parallax.style.backgroundPositionY = offset* 0.7 +"px";
  console.console.log('a' + offset );
})
