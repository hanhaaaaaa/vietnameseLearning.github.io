var modal = document.querySelector(".gioi_thieu");
var darwin = this.document.querySelector(".darwin");

function next() {
  $(".chinh_xac").fadeOut();
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    darwin.style.animation = "jump0 1.5s ease-out";
    setTimeout(function () {
      darwin.style.animation = "jump_darwin1 1s ease-out infinite";
    }, 1500);

    setTimeout(() => {
      batDau();
      return;
    }, 1000);
  }
};

function batDau() {
  $(".da2").click(function () {
    darwin.style.animation = "";
    $(".darwin").animate({ left: "20%", top: "65%" }, 2000);
    setTimeout(() => {
      moCauHoi2();
    }, 2500);
  });
}

function moCauHoi2() {
  $(".da2").unbind("click");
  $(".cau-hoi-2").show();

  $(".dap-an-dung2").click(function () {
    $(".cau-hoi-2").hide();
    $(".chinh_xac").show();
    setTimeout(() => {
      $(".chinh_xac").hide();
    }, 1000);
    $(".da3").click(function () {
      darwin.style.animation = "";
      $(".darwin").animate({ left: "30%", top: "60%" }, 2000);
      setTimeout(() => {
        moCauHoi3();
      }, 2500);
    });
  });

  $(".dap-an-sai2").click(function () {
    $(".cau-hoi-2").hide();
    $(".da2").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua2").show();
    }, 500);
  });
}

function moCauHoi3() {
  $(".da3").unbind("click");
  $(".cau-hoi-3").show();
  $(".dap-an-dung3").click(function () {
    $(".cau-hoi-3").hide();
    $(".chinh_xac").show();
    setTimeout(() => {
      $(".chinh_xac").hide();
    }, 1000);
    $(".da4").click(function () {
      darwin.style.animation = "";
      $(".darwin").animate({ left: "45%", top: "60%" }, 2000);
      setTimeout(() => {
        moCauHoi4();
      }, 2500);
    });
  });
  $(".dap-an-sai3").click(function () {
    $(".cau-hoi-3").hide();
    $(".da3").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua3").show();
    }, 500);
  });
}

function moCauHoi4() {
  $(".da7").unbind("click");
  $(".cau-hoi-4").show();
  $(".dap-an-dung4").click(function () {
    $(".cau-hoi-4").hide();
    $(".chinh_xac").show();
    setTimeout(() => {
      $(".chinh_xac").hide();
    }, 1000);
    $(".da5").click(function () {
      darwin.style.animation = "";
      $(".darwin").animate({ left: "60%", top: "60%" }, 2000);
      setTimeout(() => {
        moCauHoi5();
      }, 2500);
    });
  });
  $(".dap-an-sai4").click(function () {
    $(".cau-hoi-4").hide();
    $(".da4").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua4").show();
    }, 500);
  });
}

function moCauHoi5() {
  $(".da5").unbind("click");
  $(".cau-hoi-5").show();
  $(".dap-an-dung5").click(function () {
    $(".cau-hoi-5").hide();
    $(".chinh_xac").show();
    setTimeout(() => {
      $(".chinh_xac").hide();
    }, 1000);
    $(".da6").click(function () {
      darwin.style.animation = "";
      $(".darwin").animate({ left: "70%", top: "50%" }, 2000);
      setTimeout(() => {
        moCauHoi6();
      }, 2500);
    });
  });
  $(".dap-an-sai5").click(function () {
    $(".cau-hoi-5").hide();
    $(".da5").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua5").show();
    }, 500);
  });
}

function moCauHoi6() {
  $(".da6").unbind("click");
  $(".cau-hoi-6").show();
  $(".dap-an-dung6").click(function () {
    $(".cau-hoi-6").hide();
    $(".chinh_xac").show();
    setTimeout(() => {
      $(".chinh_xac").hide();
    }, 1000);
    $(".da7").click(function () {
      darwin.style.animation = "";
      $(".darwin").animate({ left: "80%", top: "40%" }, 2000);
      setTimeout(() => {
        moCauHoi7();
      }, 2500);
    });
  });
  $(".dap-an-sai6").click(function () {
    $(".cau-hoi-6").hide();
    $(".da6").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua6").show();
    }, 500);
  });
}

function moCauHoi7() {
  $(".da7").unbind("click");
  $(".cau-hoi-7").show();
  $(".dap-an-dung7").click(function () {
    $(".cau-hoi-7").hide();
    $(".chinh_xac").show();
    setTimeout(() => {
      $(".chinh_xac").hide();
    }, 1000);
    $(".da8").click(function () {
      darwin.style.animation = "";
      $(".darwin").animate({ left: "65%", top: "35%" }, 2000);
      setTimeout(() => {
        moCauHoi8();
      }, 2500);
    });
  });
  $(".dap-an-sai7").click(function () {
    $(".cau-hoi-7").hide();
    $(".da7").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua7").show();
    }, 500);
  });
}

function moCauHoi8() {
  $(".da8").unbind("click");
  $(".cau-hoi-8").show();
  $(".dap-an-dung8").click(function () {
    $(".cau-hoi-8").hide();
    $(".chinh_xac").show();
    setTimeout(() => {
      $(".chinh_xac").hide();
    }, 1000);
    $(".da9").click(function () {
      darwin.style.animation = "";
      $(".darwin").animate({ left: "50%", top: "32%" }, 2000);
      setTimeout(() => {
        moCauHoi9();
      }, 2500);
    });
  });
  $(".dap-an-sai8").click(function () {
    $(".cau-hoi-8").hide();
    $(".da8").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua8").show();
    }, 500);
  });
}

function moCauHoi9() {
  $(".da9").unbind("click");
  $(".cau-hoi-9").show();
  $(".dap-an-dung9").click(function () {
    $(".cau-hoi-9").hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: "40%", top: "22%" }, 2000);

    setTimeout(() => {
      chienThang();
      return;
    }, 2500);
  });
  $(".dap-an-sai9").click(function () {
    $(".cau-hoi-9").hide();
    $(".da9").hide();
    setTimeout(() => {
      darwin.style.display = "none";
      $(".div_thua9").show();
    }, 500);
  });
}

function chienThang() {
  $(".div_win").show();
}
