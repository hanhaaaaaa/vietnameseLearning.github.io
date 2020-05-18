var modal = document.querySelector(".gioi_thieu");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function ngaunhien_tuvung() {
  let de_ngaunhien = Math.floor(Math.random() * 3);
  if (de_ngaunhien == 0) {
    $(".linkTo5").attr("href", "./views/tu_vung/de1.html");
  } else if (de_ngaunhien == 1) {
    $(".linkTo5").attr("href", "./views/tu_vung/de2.html");
  } else {
    $(".linkTo5").attr("href", "./views/tu_vung/de3.html");
  }
}

function ngaunhien_chinhta() {
  let de_ngaunhien = Math.floor(Math.random() * 3);
  if (de_ngaunhien == 0) {
    $(".linkTo3").attr("href", "./views/chinh_ta/de1.html");
  } else if (de_ngaunhien == 1) {
    $(".linkTo3").attr("href", "./views/chinh_ta/de2.html");
  } else {
    $(".linkTo3").attr("href", "./views/chinh_ta/de3.html");
  }
}

function ngaunhien_loaicau() {
  let de_ngaunhien = Math.floor(Math.random() * 3);
  if (de_ngaunhien == 0) {
    $(".linkTo1").attr("href", "./views/loai_cau/de1.html");
  } else if (de_ngaunhien == 1) {
    $(".linkTo1").attr("href", "./views/loai_cau/de2.html");
  } else {
    $(".linkTo1").attr("href", "./views/loai_cau/de3.html");
  }
}
function ngaunhien_lamvan() {
  let de_ngaunhien = Math.floor(Math.random() * 2);
  if (de_ngaunhien == 0) {
    $(".linkTo2").attr("href", "./views/lam_van/lv1.html");
  } else if (de_ngaunhien == 1) {
    $(".linkTo2").attr("href", "./views/lam_van/lv2.html");
  }
}

$(".linkTo5").hover(
  function () {
    $("#ct5").hide();
    $(".thong_tin_ct5").show();
  },
  function () {
    $("#ct5").show();
    $(".thong_tin_ct5").hide();
  }
);

$(".linkTo4").hover(
  function () {
    $("#ct4").hide();
    $(".thong_tin_ct4").show();
  },
  function () {
    $("#ct4").show();
    $(".thong_tin_ct4").hide();
  }
);

$(".linkTo3").hover(
  function () {
    $("#ct3").hide();
    $(".thong_tin_ct3").show();
  },
  function () {
    $("#ct3").show();
    $(".thong_tin_ct3").hide();
  }
);

$(".linkTo2").hover(
  function () {
    $("#ct2").hide();
    $(".thong_tin_ct2").show();
  },
  function () {
    $("#ct2").show();
    $(".thong_tin_ct2").hide();
  }
);

$(".linkTo1").hover(
  function () {
    $("#ct1").hide();
    $(".thong_tin_ct1").show();
  },
  function () {
    $("#ct1").show();
    $(".thong_tin_ct1").hide();
  }
);
