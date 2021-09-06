function checkValidation(param){
    var flag = false;
    for(let key in param) {
        if (param[key] == '') flag = true;
    }
    return flag;
}
// preload hide
$(window).on('load', function() {
    $("#preload").hide();
   // :: 12.0 Toggler Active Code
    $('#toggler').on('click', function () {
        $('.treading-post-area').toggleClass('on');
    });
    $('.close-icon').on('click', function () {
        $('.treading-post-area').removeClass('on');
    }); 
});
