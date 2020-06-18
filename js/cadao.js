$(function () {
  $(".chuabai").hide();
  $(".dung").hide();
  $(".sai").hide();
});
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

let arr = [];
function drop(ev, stt) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  kiemTraKeoTha(stt)
  arr.push(data);
  console.log(arr.toString());
}

function kiemTraKeoTha(stt) {
  console.log(stt)
  switch (stt) {
    case "cd1":
      $("#cd1").addClass("khoaKeoTha");
      break;
    case "cd2":
      $("#cd1").addClass("khoaKeoTha");
      break;
    case "cd3":
      $("#cd1").addClass("khoaKeoTha");
      break;
    case "cd4":
      $("#cd1").addClass("khoaKeoTha");
      break;
    case "cd5":
      $("#cd1").addClass("khoaKeoTha");
      break;
    case "cd6":
      $("#cd1").addClass("khoaKeoTha");
      break;
    case "cd7":
      $("#cd1").addClass("khoaKeoTha");
      break;
    case "cd8":
      $("#cd1").addClass("khoaKeoTha");
      break;
  }
}

function ktcadao1() {
  if (
    arr.toString() === "co,cong,mai,sat,co2,ngay,nen,kim" ||
    arr.toString() === "co2,cong,mai,sat,co,ngay,nen,kim"
  ) {
    $(".chuabai").show();
    $(".dung").show();
    $(".nut-click").hide();
  } else {
    $(".chuabai").show();
    $(".sai").show();
    $(".nut-click").hide();
  }
}

function ktcadao2() {
  if (arr.toString() === "khong,thay,do,may,lam,nen") {
    $(".chuabai").show();
    $(".dung").show();
    $(".nut-click").hide();
  } else {
    $(".chuabai").show();
    $(".sai").show();
    $(".nut-click").hide();
  }
}

function ktcadao3() {
  if (
    arr.toString() === "tien,hoc,le,hau,hoc2,van" ||
    arr.toString() === "tien,hoc2,le,hau,hoc,van"
  ) {
    $(".chuabai").show();
    $(".dung").show();
    $(".nut-click").hide();
  } else {
    $(".chuabai").show();
    $(".sai").show();
    $(".nut-click").hide();
  }
}
