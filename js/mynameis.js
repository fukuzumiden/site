window.onload = function() {
  var my = document.getElementById("myname");
  my.innerHTML = "...fukuzumiden";
}

document.addEventListener('onmousemove', onmousemove);
onmousemove = function(e) {
  var my = document.getElementById("myname");
  var x = (e.pageX-450)/100;
  var y = (e.pageY-30)/70;
  my.innerHTML = "..." + String.fromCharCode(102+x) + String.fromCharCode(117) + String.fromCharCode(107) + String.fromCharCode(117-5*x) + String.fromCharCode(122-y*2) + "umi" + String.fromCharCode(100 + y) + String.fromCharCode(101) + "n";
  // output.innerHTML = `x:` + e.pageX + ` y:` + e.pageY;
}

document.addEventListener('onmouseout', onmouseout);
onmouseout = function(e) {
  var mymy = document.getElementById("myname");
  mymy.innerHTML = "...fukuzumiden";
}
