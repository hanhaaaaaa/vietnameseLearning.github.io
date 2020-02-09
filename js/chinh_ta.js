$(document).ready(function () {
  var modal = document.querySelector('.gioi_thieu');
  var ds_may = $('.div-may')

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
})