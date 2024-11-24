$(document).ready(function(){

    $('.product-links-wap a').click(function(){  
        var this_src = $(this).children('img').attr('src');
        $('#current_product_img').attr('src',this_src);
        return false;
    });
      
    $('#btn_minus').click(function(){
        var val=$("#var_value").html();
        val=(val =='1')?val:val-1;
        $("#var_value").html(val);
        $("product_quantity").val(val);
        return false;
    })
    $('#btn_plus').click(function(){
        var val=$("#var_value").html();
        val++;
        $("#var_value").html(val);
        $("#product_quantity").val(val);
        return false;
    });
    $(".img-button").click(function(){
        var this_img= $(this).parent('#cap_img').children('img').attr('src');
        console.log(this_img);
        $('.modal-img').attr('src',this_img);
        return false;
    })
})