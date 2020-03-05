

function loadLayout() {
    console.log('loading layout');

    var fetchTimeout = localStorage.getItem('fetchTimeout');
    $('#lookUpTimeout').val(fetchTimeout);

}



function numericValidate(evt) { //only numbers accepted for timeout setting
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}




document.addEventListener("DOMContentLoaded",
    function() {
        loadLayout();

        $('#lookUpTimeout').keypress(
            function(event) {
                numericValidate(event);
        });

        function lookUpTimeoutPostData() {
            $("#lookUpTimeout").css("background-color", "#D6D6FF");

            var fetchTimeout = $('#lookUpTimeout').val();
            localStorage.setItem('fetchTimeout', fetchTimeout);
        }

        var timerLookUpTimeout;

        $("#lookUpTimeout").on('keyup', function() {
            timerLookUpTimeout && clearTimeout(timerLookUpTimeout);
            timerLookUpTimeout = setTimeout(lookUpTimeoutPostData, 100);
        });

        //-->----添加使用提示和致謝----------------------------
        var tipsFile = chrome.extension.getURL('tips.html');
        $('#tips').attr('href', tipsFile);
        

    });