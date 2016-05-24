(function ($) {
  'use strict';

  $(document).ready(function () {
    $("#menu-toggle").click(function() {
      $("body").toggleClass("menu-open");
      $(this).toggleClass("active");
	});
    
    //$('#pop').popover();
    
    $(function () {
      $('[data-toggle="popover"]').popover();
    })
    
  }); //end ready

}(jQuery));