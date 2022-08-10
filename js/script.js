$(function() {
    $(".img_item2").hide();
    $(".img_item1").show();
    $(".img_item3").hide();
    $(".img_item4").hide();
    $(".btn_item1").addClass("active");
    $(".btn_item2").removeClass("active");
    $(".btn_item3").removeClass("active");
    $(".btn_item4").removeClass("active");

    $(".groupbox1").show();
    $(".groupbox2").hide();
    $(".groupbox3").hide();
    $(".group1").addClass("active");
    $(".group2").removeClass("active");
    $(".group3").removeClass("active");

    $(".groupboxx1").show();
    $(".groupboxx2").hide();

    /* $(".groupNext1").show();
     $(".groupNext2").show();
     $(".groupNext3").show();

     $(".groupPrev1").show();
     $(".groupPrev2").show();
     $(".groupPrev3").show();*/

    $(".btn_item1").click(function() {
        $(".img_item1").show();
        $(".img_item2").hide();
        $(".img_item3").hide();
        $(".img_item4").hide();
        $(".btn_item1").addClass("active");
        $(".btn_item2").removeClass("active");
        $(".btn_item3").removeClass("active");
        $(".btn_item4").removeClass("active");
    });
    $(".btn_item2").click(function() {
        $(".img_item1").hide();
        $(".img_item2").show();
        $(".img_item3").hide();
        $(".img_item4").hide();
        $(".btn_item1").removeClass("active");
        $(".btn_item2").addClass("active");
        $(".btn_item3").removeClass("active");
        $(".btn_item4").removeClass("active");
    });
    $(".btn_item3").click(function() {
        $(".img_item1").hide();
        $(".img_item2").hide();
        $(".img_item3").show();
        $(".img_item4").hide();
        $(".btn_item1").removeClass("active");
        $(".btn_item2").removeClass("active");
        $(".btn_item3").addClass("active");
        $(".btn_item4").removeClass("active");
    });
    $(".btn_item4").click(function() {
        $(".img_item1").hide();
        $(".img_item2").hide();
        $(".img_item3").hide();
        $(".img_item4").show();
        $(".btn_item1").removeClass("active");
        $(".btn_item2").removeClass("active");
        $(".btn_item3").removeClass("active");
        $(".btn_item4").addClass("active");
    });
    $(".group1").click(function() {
        $(".groupbox1").show();
        $(".groupbox2").hide();
        $(".groupbox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
    });
    $(".group2").click(function() {
        $(".groupbox1").hide();
        $(".groupbox2").show();
        $(".groupbox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
    });
    $(".group3").click(function() {
        $(".groupbox1").hide();
        $(".groupbox2").hide();
        $(".groupbox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
    });
    $(".groupPrev1").click(function() {
        $(".groupbox1").hide();
        $(".groupbox2").show();
        $(".groupbox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
    });
    $(".groupNext2").click(function() {
        $(".groupbox1").show();
        $(".groupbox2").hide();
        $(".groupbox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
    });
    $(".groupPrev2").click(function() {
        $(".groupbox1").hide();
        $(".groupbox2").hide();
        $(".groupbox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
    });
    $(".groupPrev3").click(function() {
        $(".groupbox1").show();
        $(".groupbox2").hide();
        $(".groupbox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
    });
    $(".groupNext3").click(function() {
        $(".groupbox1").hide();
        $(".groupbox2").show();
        $(".groupbox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
    });
    $(".groupNext1").click(function() {
        $(".groupbox1").hide();
        $(".groupbox2").hide();
        $(".groupbox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
    });
    $(".groupGiftPrev1").click(function() {
        $(".giftBox1").hide();
        $(".giftBox2").show();
    });
    $(".groupGiftNext2").click(function() {
        $(".giftBox1").show();
        $(".giftBox2").hide();
    });
    $(".groupGiftPrev2").click(function() {
        $(".giftBox1").show();
        $(".giftBox2").hide();
    });
    $(".groupGiftNext1").click(function() {
        $(".giftBox1").hide();
        $(".giftBox2").show();
    });


    $(".groupPrevv1").click(function() {
        $(".groupboxx1").hide();
        $(".groupboxx2").show();
    });
    $(".groupNexxt1").click(function() {
        $(".groupboxx1").hide();
        $(".groupboxx2").show();
    });
    $(".groupPrevv2").click(function() {
        $(".groupboxx1").show();
        $(".groupboxx2").hide();
    });
    $(".groupNexxt2").click(function() {
        $(".groupboxx1").show();
        $(".groupboxx2").hide();
    });
});