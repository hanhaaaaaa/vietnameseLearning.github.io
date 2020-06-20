$(document).ready(function () {

  var modal = document.querySelector('.gioi_thieu');
  var ds_may = $('.div-may');
  var tong_so_cau = ds_may.length;
  var diem = 0;
  var so_mang = 3;
  var cau_sai = [];
  $('.dung').click(function (event) {
    $(this).remove();
    diem += 100;
    $('#diem').text(diem);
  })

  $('.sai').click(function () {
    $(this).remove();

    cau_sai.push($(this).text());
    if (diem > 50) diem -= 50;
    so_mang -= 1;
    $('#diem').text(diem);
    if (so_mang == 2) {
      $('#3-mang').hide();
      $('#2-mang').show();
    } else if (so_mang == 1) {
      $('#2-mang').hide();
      $('#1-mang').show();
    } else {
      $('#1-mang').hide();
      thua();
    }
    console.log(cau_sai)
  })

 

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      batdau();
    }
  }

  function batdau() {
    onTimer();
    mucDe();
  }

  var time = 60;
  function onTimer() {
    document.getElementById('timer').innerHTML = time;
    time--;
    if (time < 0) {
      hetGio();
    }
    else {
      setTimeout(onTimer, 1000);
    }
  }

  async function mucDe() {
    var so_cau = tong_so_cau / 3;
    console.log(so_cau)
    for (let i = 0; i < so_cau; i++) {
      tong_so_cau = $('.div-may').length;
      let cau_so = Math.floor(Math.random() * tong_so_cau);
      let vi_tri_left = Math.random() * 1200;
      let vi_tri_top = Math.random() * 300;
      let may = $('.div-may').eq(cau_so);
      may.css("left", vi_tri_left);
      may.css("top", vi_tri_top);
      may.fadeIn(1500);
      await sleep(1500);
      may.fadeOut(1500);
      await sleep(1500);
      may.remove();
    }
    mucKho();
  }

  async function mucKho() {
    while (true) {
      tong_so_cau = $('.div-may').length;
      if (tong_so_cau <= 1) break;
      let cau1 = Math.floor(Math.random() * tong_so_cau);
      let cau2 = Math.floor(Math.random() * tong_so_cau);
      while (cau1 == cau2) {
        cau2 = Math.floor(Math.random() * tong_so_cau);
      }
      let may1 = $('.div-may').eq(cau1);
      let may2 = $('.div-may').eq(cau2);
      let left1 = Math.random() * 1200;
      let left2 = Math.random() * 1200;
      let top1 = Math.random() * 300;
      let top2 = Math.random() * 300;
      may1.css("left", left1);
      may1.css("top", top1);
      may2.css("left", left2);
      may2.css("top", top2);
      may1.fadeIn(1500);
      await sleep(1000);
      may2.fadeIn(1000);
      await sleep(500);
      may1.fadeOut(1500);
      await sleep(1000);
      may2.fadeOut(1500);
      await sleep(1500);
      may1.remove();
      may2.remove();
    }
  }
  function thua() {
    $('.diem').eq(0).text(diem);
    $('.cau_sai').eq(0).text("Các từ : " + cau_sai.toString() + " là các từ đúng chính tả !")
    $('.div_thua').eq(0).show();
  }

  function hetGio() {
    $('.diem').eq(1).text(diem);
    if (cau_sai.length > 0) {
      $('.cau_sai').eq(1).text("Các từ : " + cau_sai.toString() + " là các từ đúng chính tả !")
    }
    $('.div_het_gio').eq(0).show();
  }
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}