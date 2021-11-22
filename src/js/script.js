(function(){
    "use strict";

    $('[data-toggle="sidebar"]').click(function(e){
        e.preventDefault();
        $('#sidebar').toggleClass('sidebar_toggle');
        $('.main').toggleClass('full-width');
    });

})();