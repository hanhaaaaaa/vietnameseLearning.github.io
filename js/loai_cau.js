$(function () {
  var modal = document.querySelector(".gioi_thieu");
  // var darwin = this.document.querySelector(".nicole");
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  var offset2 = $("#cau-hoi-2").offset().left - 20 + "px";
  console.log(offset2);

  var offset3 = $("#cau-hoi-3").offset().left - 20 + "px";
  var offset4 = $("#cau-hoi-4").offset().left - 20 + "px";
  var offset5 = $("#cau-hoi-5").offset().left - 20 + "px";
  var offset6 = $("#cau-hoi-6").offset().left - 20 + "px";
  var offset7 = $("#cau-hoi-7").offset().left - 20 + "px";
  var offset8 = $("#cau-hoi-8").offset().left - 20 + "px";

  $("#ch-1,#ch-2,#ch-3,#ch-4,#ch-5,#ch-6,#ch-7,#ch-8").hide();
  // click hiện câu hỏi tương ứng và ẩn các phần tử ban đầu đi
  $("#cau-hoi-1").css("cursor", "pointer");
  $("#cau-hoi-1").click(function () {
    $("#ch-1").show();
    $("#phan-tu-ban-dau").hide();
  });
  // xử lí đáp án đúng. Nếu chọn đúng thì ẩn con thú đó đi
  $("#nicole-vui").hide();
  $("#chien-thang").hide();
  let flag = 0;
  function animation() {
    $("#nicole").hide();
    $("#nicole-vui").show();
    setTimeout(() => {
      $("#nicole").show();
      $("#nicole-vui").hide();
    }, 2000);
  }
  function chienthang() {
    setTimeout(() => {
      $("#nicole").hide();
      $("#nicole-vui").show();
      $("#chien-thang").show();
    }, 1000);
  }

  $("#dap-an-dung-1").click(function () {
    $(".nicole").animate({ left: offset2 }, 2000);
    $("#ch-1").hide();
    $("#cau-hoi-2").css("cursor", "pointer");
    $("#cau-hoi-1").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-1").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    $("#cau-hoi-2").click(function () {
      $("#ch-2").show();
      $("#phan-tu-ban-dau").hide();
    });
    animation();
  });
  $("#dap-an-dung-2").click(function () {
    $(".nicole").animate({ left: offset3 }, 2000);
    $("#ch-2").hide();
    $("#cau-hoi-3").css("cursor", "pointer");
    $("#cau-hoi-2").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-2").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    $("#cau-hoi-3").click(function () {
      $("#ch-3").show();
      $("#phan-tu-ban-dau").hide();
    });
    animation();
  });
  $("#dap-an-dung-3").click(function () {
    $(".nicole").animate({ left: offset4 }, 2000);
    $("#ch-3").hide();
    $("#cau-hoi-4").css("cursor", "pointer");
    $("#cau-hoi-3").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-3").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    $("#cau-hoi-4").click(function () {
      $("#ch-4").show();
      $("#phan-tu-ban-dau").hide();
    });
    animation();
  });
  $("#dap-an-dung-4").click(function () {
    $(".nicole").animate({ left: offset5 }, 2000);
    $("#cau-hoi-5").css("cursor", "pointer");
    $("#ch-4").hide();
    $("#cau-hoi-4").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-4").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    $("#cau-hoi-5").click(function () {
      $("#ch-5").show();
      $("#phan-tu-ban-dau").hide();
    });
    animation();
  });
  $("#dap-an-dung-5").click(function () {
    $(".nicole").animate({ left: offset6 }, 2000);
    $("#cau-hoi-6").css("cursor", "pointer");
    $("#ch-5").hide();
    $("#cau-hoi-5").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-5").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    $("#cau-hoi-6").click(function () {
      $("#ch-6").show();
      $("#phan-tu-ban-dau").hide();
    });
    animation();
  });
  $("#dap-an-dung-6").click(function () {
    $(".nicole").animate({ left: offset7 }, 2000);
    $("#cau-hoi-7").css("cursor", "pointer");
    $("#ch-6").hide();
    $("#cau-hoi-6").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-6").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    $("#cau-hoi-7").click(function () {
      $("#ch-7").show();
      $("#phan-tu-ban-dau").hide();
    });
    animation();
  });
  $("#dap-an-dung-7").click(function () {
    $(".nicole").animate({ left: offset8 }, 2000);
    $("#cau-hoi-8").css("cursor", "pointer");
    $("#ch-7").hide();
    $("#cau-hoi-7").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-7").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    $("#cau-hoi-8").click(function () {
      $("#ch-8").show();
      $("#phan-tu-ban-dau").hide();
    });
    animation();
  });
  $("#dap-an-dung-8").click(function () {
    $("#ch-8").hide();
    $("#cau-hoi-8").fadeTo(1000, 0, function () {
      flag++;
      if (flag == 8) {
        chienthang();
      }
    });
    $("#cau-hoi-8").addClass("noClick");
    $("#phan-tu-ban-dau").show();
    animation();
  });
  // xử lí đáp án sai nếu sai thì hiện thị chữa và bắt người chơi chơi lại hoặc chuyển hướng về trang chủ
  $(
    "#sua-dap-an-sai-1,#sua-dap-an-sai-2,#sua-dap-an-sai-3,#sua-dap-an-sai-4,#sua-dap-an-sai-5,#sua-dap-an-sai-6,#sua-dap-an-sai-7,#sua-dap-an-sai-8"
  ).hide();
  $(".dap-an-sai-1").click(function () {
    $("#sua-dap-an-sai-1").show();
    $("#ch-1").hide();
  });
  $(".dap-an-sai-2").click(function () {
    $("#sua-dap-an-sai-2").show();
    $("#ch-2").hide();
  });
  $(".dap-an-sai-3").click(function () {
    $("#sua-dap-an-sai-3").show();
    $("#ch-3").hide();
  });
  $(".dap-an-sai-4").click(function () {
    $("#sua-dap-an-sai-4").show();
    $("#ch-4").hide();
  });
  $(".dap-an-sai-5").click(function () {
    $("#sua-dap-an-sai-5").show();
    $("#ch-5").hide();
  });
  $(".dap-an-sai-6").click(function () {
    $("#sua-dap-an-sai-6").show();
    $("#ch-6").hide();
  });
  $(".dap-an-sai-7").click(function () {
    $("#sua-dap-an-sai-7").show();
    $("#ch-7").hide();
  });
  $(".dap-an-sai-8").click(function () {
    $("#sua-dap-an-sai-8").show();
    $("#ch-8").hide();
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
