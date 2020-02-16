$(function(){
    $("#nop-bai").hide();
    $("#toan-bo-cau-hoi").hide();
    $(".cham-diem").hide();
    let m = 0; // Phút
    let s = 10; // Giây
    let timeout = null; // Timeout
    function dongHoDemGio(){
        /*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
        // Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
        //  - giảm số phút xuống 1 đơn vị
        //  - thiết lập số giây lại 59
        if (s === -1){
            m -= 1;
            s = 59;
        }
        // Nếu số phút = -1 tức là đã hết giờ, lúc này:
        //  - Dừng chương trình
        if (m === -1){
            clearTimeout(timeout);
            $("#het-thoi-gian").text("Hết thời gian rồi !!!!");
            tinhDiem();
            return false;
        }

        /*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/
        document.getElementById('m').innerText = m.toString();
        document.getElementById('s').innerText = s.toString();

        /*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
        timeout = setTimeout(function(){
            s--;
            dongHoDemGio();
        }, 1000);
    }
    function dungdemthoigian(){
        clearTimeout(timeout);
    }
    function tinhDiem(){
        let diem = 0;
        if($('input[name="cau1"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau2"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau3"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau4"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau5"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau6"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau7"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau8"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau9"]').val() === 'chết đứng') diem=diem+5;
        if($('input[name="cau10"]').val() === 'tay mềm') diem=diem+5;
        if($('input[name="cau11"]').val() === 'bỏ cỏ') diem=diem+5;
        if($('input[name="cau10"]').val() === 'mài sắt') diem=diem+5;
        if($('input[name="cau13"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau14"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau15"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau16"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau17"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau18"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau19"]:checked').val() === 'dung') diem=diem+5;
        if($('input[name="cau20"]:checked').val() === 'dung') diem=diem+5;
        $("#toan-bo-cau-hoi").hide();
        $(".cham-diem").show();
        if(diem >= 90){
           $(".danh-gia").text("Wowww bạn thật xuất sắc!");
        }else if(diem >= 80){
            $(".danh-gia").text("Wowww bạn thật giỏi!");
        }else if(diem >= 70){
            $(".danh-gia").text("Bạn khá thật đấy!");
        }
        $("#diem").text(diem);
    }

    $("#bat-dau").click(function(){
        $("#bat-dau").hide();
        $("#nop-bai").show();
        $(".gioi-thieu").hide();
        $("#toan-bo-cau-hoi").show();
        dongHoDemGio();
    });
    $("#nop-bai").click(function(){
        tinhDiem();
        dungdemthoigian();
    });
});