$(function(){
    function toggleScroll (){
        if($(window).width() <= 760){
            $('.storeLe').addClass('scrollable')
        }else{
            $('.storeLe').removeClass('scrollable')
        }
    }

    toggleScroll();

    $(window).resize(function(){
        toggleScroll();
    })
})