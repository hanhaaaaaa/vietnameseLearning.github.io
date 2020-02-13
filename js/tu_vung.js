var modal = document.querySelector('.gioi_thieu');
var darwin = this.document.querySelector('.darwin');

jQuery.fn.aPosition = function () {
  thisLeft = this.offset().left;
  thisTop = this.offset().top;
  thisParent = this.parent();

  parentLeft = thisParent.offset().left;
  parentTop = thisParent.offset().top;

  return {
    left: thisLeft - parentLeft,
    top: thisTop - parentTop
  };
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    darwin.style.animation = "jump0 1.5s ease-out";
    setTimeout(function () {
      darwin.style.animation = "jump_darwin1 1s ease-out infinite";
    }, 1500);

    setTimeout(() => {
      moCauHoi1();
      return;
    }, 1000);
  }
}

function moCauHoi1() {
  $('.cau-hoi-1').show();
  $(".dap-an-dung1").click(function () {
    $('.cau-hoi-1').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '20%', top: '65%' }, 2000);

    setTimeout(() => {
      moCauHoi2();
      return;
    }, 2500);

  });
  $(".dap-an-sai1").click(function () {
    $('.cau-hoi-1').hide();
    $('.da1').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("nhảy", "động từ");
    }, 500);
  })
}

function moCauHoi2() {
  $('.cau-hoi-2').show();
  $(".dap-an-dung2").click(function () {
    $('.cau-hoi-2').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '30%', top: '60%' }, 2000);

    setTimeout(() => {
      moCauHoi3();
      return;
    }, 2500);

  });
  $(".dap-an-sai2").click(function () {
    $('.cau-hoi-2').hide();
    $('.da2').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("bông hoa", "danh từ");
    }, 500);
  })
}

function moCauHoi3() {
  $('.cau-hoi-3').show();
  $(".dap-an-dung3").click(function () {
    $('.cau-hoi-3').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '45%', top: '60%' }, 2000);

    setTimeout(() => {
      moCauHoi4();
      return;
    }, 2500);

  });
  $(".dap-an-sai3").click(function () {
    $('.cau-hoi-3').hide();
    $('.da3').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("đẹp đẽ", "tính từ");
    }, 500);
  })
}

function moCauHoi4() {
  $('.cau-hoi-4').show();
  $(".dap-an-dung4").click(function () {
    $('.cau-hoi-4').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '60%', top: '60%' }, 2000);

    setTimeout(() => {
      moCauHoi5();
      return;
    }, 2500);

  });
  $(".dap-an-sai4").click(function () {
    $('.cau-hoi-4').hide();
    $('.da4').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("chai nước", "danh từ");
    }, 500);
  })
}

function moCauHoi5() {
  $('.cau-hoi-5').show();
  $(".dap-an-dung5").click(function () {
    $('.cau-hoi-5').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '70%', top: '50%' }, 2000);

    setTimeout(() => {
      moCauHoi6();
      return;
    }, 2500);

  });
  $(".dap-an-sai5").click(function () {
    $('.cau-hoi-5').hide();
    $('.da5').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("ô hay", "thán từ");
    }, 500);
  })
}

function moCauHoi6() {
  $('.cau-hoi-6').show();
  $(".dap-an-dung6").click(function () {
    $('.cau-hoi-6').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '80%', top: '40%' }, 2000);

    setTimeout(() => {
      moCauHoi7();
      return;
    }, 2500);

  });
  $(".dap-an-sai6").click(function () {
    $('.cau-hoi-6').hide();
    $('.da6').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("hai", "số từ");
    }, 500);
  })
}

function moCauHoi7() {
  $('.cau-hoi-7').show();
  $(".dap-an-dung7").click(function () {
    $('.cau-hoi-7').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '65%', top: '35%' }, 2000);

    setTimeout(() => {
      moCauHoi8();
      return;
    }, 2500);

  });
  $(".dap-an-sai7").click(function () {
    $('.cau-hoi-7').hide();
    $('.da7').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("tôi, bạn", "đại từ");
    }, 500);
  })
}

function moCauHoi8() {
  $('.cau-hoi-8').show();
  $(".dap-an-dung8").click(function () {
    $('.cau-hoi-8').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '50%', top: '32%' }, 2000);

    setTimeout(() => {
      moCauHoi9();
      return;
    }, 2500);

  });
  $(".dap-an-sai8").click(function () {
    $('.cau-hoi-8').hide();
    $('.da8').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("hôm nay", "trạng từ");
    }, 500);
  })
}

function moCauHoi9() {
  $('.cau-hoi-9').show();
  $(".dap-an-dung9").click(function () {
    $('.cau-hoi-9').hide();
    darwin.style.animation = "";

    $(".darwin").animate({ left: '40%', top: '22%' }, 2000);

    setTimeout(() => {
      chienThang();
      return;
    }, 2500);

  });
  $(".dap-an-sai9").click(function () {
    $('.cau-hoi-9').hide();
    $('.da9').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver("nằm", "động từ");
    }, 500);
  })
}

function chienThang() {
  $(".div_win").show();
}

function gameOver(de_bai, da_dung) {
  $(".cau_sai").text(`Từ ${de_bai} là một ${da_dung}`);
  $(".div_thua").show();
}