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
function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  arr.push(data);
  console.log(arr.toString());
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
  if (
    arr.toString() === "khong,thay,do,may,lam,nen"
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