$(function(){
    var modal = document.querySelector('.gioi_thieu');	
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $('#chien-thang').hide();
    function animation(){
        $("#drawinChonHoa").hide();
        $("#drawinCuoi").addClass("actionDrawin");
        $("#drawinCuoi").show();
        setTimeout(() => {
            $("#drawinCuoi").removeClass("actionDrawin");
            $("#drawinChonHoa").show();
            $("#drawinCuoi").hide();
        }, 2000);
    }
    function chienthang(){
        setTimeout(() => {
            $("#drawin").hide();
            $("#nen").addClass("nen");
            $('#chien-thang').show();
        }, 1000);
    }
    // ẩn các đoạn văn
    $('#dv1,#dv2,#dv3,#dv4,#dv5,#dv6').hide();
    // ẩn cánh hoa
    $('.canh-1,.canh-2,.canh-3,.canh-4,.canh-5,.canh-6').hide();
    $('#drawinCuoi').hide();
    // click vào cánh hoa ẩn hết nội dung màn hình và show đoạn văn tương ứng
    $("#ch-1").click(function(){
        $('#dv1').show();
        $("#drawin").hide();
    });
    $("#ch-2").click(function(){
        $('#dv2').show();
        $("#drawin").hide();
    });
    $("#ch-3").click(function(){
        $('#dv3').show();
        $("#drawin").hide();
    });
    $("#ch-4").click(function(){
        $('#dv4').show();
        $("#drawin").hide();
    });
    $("#ch-5").click(function(){
        $('#dv5').show();
        $("#drawin").hide();
    });
    $("#ch-6").click(function(){
        $('#dv6').show();
        $("#drawin").hide();
    });
    //click đáp án đúng thì ghép 1 cánh hoa tương tưng và ẩn cánh hoa đó ở phần chọn đi
    // sử dụng fadeIn() thay cho show() và fadeTo() thay cho hide() để tạo hiệu ứng
    let flag = 0;
    $("#dap-an-dung-1").click(function(){
        $("#dv1").hide();
        $("#drawin").show();
        $("#ch-1").fadeTo(1000,0,function(){
            flag++;
            if(flag == 6){
                chienthang();
            }
        });
        $('.canh-1').fadeIn();
        $('#ch-1').addClass('noClick')
        animation();
    });
    $("#dap-an-dung-2").click(function(){
        $("#dv2").hide();
        $("#drawin").show();
        $("#ch-2").fadeTo(1000,0,function(){
            flag++;
            if(flag == 6){
                chienthang();
            }
        });
        $('.canh-2').fadeIn();
        $('#ch-2').addClass('noClick')
        animation();
    });
    $("#dap-an-dung-3").click(function(){
        $("#dv3").hide();
        $("#drawin").show();
        $("#ch-3").fadeTo(1000,0,function(){
            flag++;
            if(flag == 6){
                chienthang();
            }
        });
        $('.canh-3').fadeIn();
        $('#ch-3').addClass('noClick')
        animation();
    });
    $("#dap-an-dung-4").click(function(){
        $("#dv4").hide();
        $("#drawin").show();
        $("#ch-4").fadeTo(1000,0,function(){
            flag++;
            if(flag == 6){
                chienthang();
            }
        });
        $('.canh-4').fadeIn();
        $('#ch-4').addClass('noClick')
        animation();
    });
    $("#dap-an-dung-5").click(function(){
        $("#dv5").hide();
        $("#drawin").show();
        $("#ch-5").fadeTo(1000,0,function(){
            flag++;
            if(flag == 6){
                chienthang();
            }
        });
        $('.canh-5').fadeIn();
        $('#ch-5').addClass('noClick')
        animation();
    });
    $("#dap-an-dung-6").click(function(){
        $("#dv6").hide();
        $("#drawin").show();
        $("#ch-6").fadeTo(1000,0,function(){
            flag++;
            if(flag == 6){
                chienthang();
            }
        });
        $('.canh-6').fadeIn();
        $('#ch-6').addClass('noClick')
        animation();
    });
    // xử lí đáp án sai mặc định ẩn, nếu chọn sai hiển thị bài chữa và cho chơi lại hoặc về trang chủ
    $("#dvds1,#dvds2,#dvds3,#dvds4,#dvds5,#dvds6").hide();
    $("#dap-an-sai-1").click(function(){
        $("#dvds1").show();
        $("#dv1").hide();
        $("#drawin").hide();
    });
    $("#dap-an-sai-2").click(function(){
        $("#dvds2").show();
        $("#dv2").hide();
        $("#drawin").hide();
    });
    $(".dap-an-sai-3").click(function(){
        $("#dvds3").show();
        $("#dv3").hide();
        $("#drawin").hide();
    });
    $(".dap-an-sai-4").click(function(){
        $("#dvds4").show();
        $("#dv4").hide();
        $("#drawin").hide();
    });
    $("#dap-an-sai-5").click(function(){
        $("#dvds5").show();
        $("#dv5").hide();
        $("#drawin").hide();
    });
    $("#dap-an-sai-6").click(function(){
        $("#dvds6").show();
        $("#dv6").hide();
        $("#drawin").hide();
    });
});