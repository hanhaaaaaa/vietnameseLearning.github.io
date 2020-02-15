$(function(){
    $("#nop-bai").hide();
    let m = 20; // Phút
    let s = 0; // Giây
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
        // Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
        //  - giảm số giờ xuống 1 đơn vị
        //  - thiết lập số phút lại 59
        if (m === -1){
            h -= 1;
            m = 59;
        }

        // Nếu số phút = -1 tức là đã hết giờ, lúc này:
        //  - Dừng chương trình
        if (m == -1){
            clearTimeout(timeout);
            alert('Hết giờ');
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

    $("#bat-dau").click(function(){
        $("#bat-dau").hide();
        $("#nop-bai").show();
        dongHoDemGio();
    });
});