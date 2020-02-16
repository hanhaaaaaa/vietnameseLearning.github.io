var modal = document.querySelector('.gioi_thieu');	
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function ngaunhien_tuvung() {
    let de_ngaunhien = Math.floor(Math.random() * 3);
    if (de_ngaunhien == 0) {
        $('.linkTo5').attr("href", "./views/tu_vung/de1.html");
    } else if (de_ngaunhien == 1) {
        $('.linkTo5').attr("href", "./views/tu_vung/de2.html");
    } else {
        $('.linkTo5').attr("href", "./views/tu_vung/de3.html");
    }
}

function ngaunhien_chinhta() {
    let de_ngaunhien = Math.floor(Math.random() * 3);
    if (de_ngaunhien == 0) {
        $('.linkTo3').attr("href", "./views/chinh_ta/de1.html");
    } else if (de_ngaunhien == 1) {
        $('.linkTo3').attr("href", "./views/chinh_ta/de2.html");
    } else {
        $('.linkTo3').attr("href", "./views/chinh_ta/de3.html");
    }
}

function ngaunhien_loaicau() {
    let de_ngaunhien = Math.floor(Math.random() * 3);
    if (de_ngaunhien == 0) {
        $('.linkTo1').attr("href", "./views/loai_cau/de1.html");
    } else if (de_ngaunhien == 1) {
        $('.linkTo1').attr("href", "./views/loai_cau/de2.html");
    } else {
        $('.linkTo1').attr("href", "./views/loai_cau/de3.html");
    }
}
function ngaunhien_lamvan() {
    let de_ngaunhien = Math.floor(Math.random() * 2);
    if (de_ngaunhien == 0) {
        $('.linkTo2').attr("href", "./views/lam_van/lv1.html");
    } else if (de_ngaunhien == 1) {
        $('.linkTo2').attr("href", "./views/lam_van/lv2.html");
    }
}