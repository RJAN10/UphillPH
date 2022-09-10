// search button overlay
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  }

  const nav = document.querySelector('.navbar')
  fetch('navbar.html')
  .then(res=>res.text())
  .then(data=>{
    nav.innerHTML=data
  })