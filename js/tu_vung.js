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
    let vi_tri_da2 = $(".da2").get(0).getBoundingClientRect();
    darwin.style.animation = "";

    $(".darwin").animate({ left: vi_tri_da2.x, top: vi_tri_da2.y - 130 }, 2000);
    setTimeout(function () {
      darwin.style.left = vi_tri_da2.x;
      darwin.style.top = vi_tri_da2.y - 130;
      darwin.style.animation = "jump_darwin1 1s ease-out infinite";
    }, 2000);

    setTimeout(() => {
      moCauHoi2();
      return;
    }, 3000);

  });
  $(".dap-an-sai1").click(function () {
    $('.cau-hoi-1').hide();
    $('.da1').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver();
    }, 500);
  })
}

function moCauHoi2() {
  $('.cau-hoi-2').show();
  $(".dap-an-dung2").click(function () {
    $('.cau-hoi-2').hide();
    let vi_tri_da3 = $(".da3").get(0).getBoundingClientRect();
    darwin.style.animation = "";
    console.log(vi_tri_da3);

    $(".darwin").animate({ left: vi_tri_da3.x, top: vi_tri_da3.y - 130 }, 2000);
    setTimeout(function () {
      darwin.style.left = vi_tri_da3.x;
      darwin.style.top = vi_tri_da3.y - 130;
      darwin.style.animation = "jump_darwin1 1s ease-out infinite";
    }, 2000);

    setTimeout(() => {
      moCauHoi3();
      return;
    }, 3000);

  });
  $(".dap-an-sai2").click(function () {
    $('.cau-hoi-2').hide();
    $('.da2').hide();
    setTimeout(() => {
      darwin.style.display = "none";
      gameOver();
    }, 500);
  })
}

// function moCauHoi3() {
//   let cau_hoi_3 = document.querySelector('.cau-hoi-3');
//   cau_hoi_3.style.display = "block";
//   $(".dap-an-dung3").click(function () {
//     darwin.style.animation = "jump_da34 2s ease-out";
//     cau_hoi_3.style.display = "none";

//     setTimeout(function () {
//       darwin.style.animation = "jump_darwin4 1s ease-out infinite";
//       darwin.style.left = "900px";
//     }, 2000);

//     setTimeout(() => {
//       moCauHoi4();
//       return ;
//     }, 3000);

//   });
//   $(".dap-an-sai3").click(function () {
//     cau_hoi_3.style.display = "none";
//     let da3 = document.querySelector('.da-3');
//     da3.style.display = "none";
//     setTimeout(() => {
//       darwin.style.display = "none";
//       gameOver();
//     }, 500);
//   })
// }

// function moCauHoi4() {
//   let cau_hoi_4 = document.querySelector('.cau-hoi-4');
//   cau_hoi_4.style.display = "block";
//   $(".dap-an-dung4").click(function () {
//     darwin.style.animation = "jump_da45 2s ease-out";
//     cau_hoi_4.style.display = "none";

//     setTimeout(function () {
//       darwin.style.animation = "jump_darwin5 1s ease-out infinite";
//       darwin.style.left = "500px";
//     }, 2000);

//     setTimeout(() => {
//       moCauHoi5();
//       return ;
//     }, 3000);
//   });
//   $(".dap-an-sai4").click(function () {
//     cau_hoi_4.style.display = "none";
//     let da4 = document.querySelector('.da-4');
//     da4.style.display = "none";
//     setTimeout(() => {
//       darwin.style.display = "none";
//       gameOver();
//     }, 500);
//   })
// }

// function moCauHoi5() {
//   let cau_hoi_5 = document.querySelector('.cau-hoi-5');
//   cau_hoi_5.style.display = "block";
//   $(".dap-an-dung5").click(function () {
//     darwin.style.animation = "jump_da56 2s ease-out";
//     cau_hoi_5.style.display = "none";

//     setTimeout(function () {
//       darwin.style.animation = "jump_darwin6 1s ease-out infinite";
//       darwin.style.left = "550px";
//     }, 2000);

//     setTimeout(() => {
//       chienThang();
//       return ;
//     }, 3000);
//   });
//   $(".dap-an-sai5").click(function () {
//     cau_hoi_5.style.display = "none";
//     let da5 = document.querySelector('.da-5');
//     da5.style.display = "none";
//     setTimeout(() => {
//       darwin.style.display = "none";
//       gameOver();
//     }, 500);
//   })
// }

function chienThang() {
  $(".div_win").show();
}

function gameOver() {
  $(".div_gameover").show();
}